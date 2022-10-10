import { Modal } from '@/UI/Modal/Modal';
import { useTypedActions } from '@/hooks/useTypedActions';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
	requiredFieldMessage,
	incorrectlyFieldMessage,
	requiredPasswordMessage,
	shortPasswordMessage,
} from '@/constants/validation';
import { useRouter } from 'next/router';
import { ILoginResponse } from '@/types/IUser';
import { RoutesEnum } from '@/constants/routes';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useState } from 'react';
import axios from '@/utils/axios';
import * as Yup from 'yup';

export const LoginContent = () => {
	const { ModalInputs, ModalInput, ModalButton, ModalErrorMessage } = Modal;

	const { showAuthModal } = useTypedActions((state) => state.modal);

	const { push } = useRouter();

	const schema = Yup.object().shape({
		email: Yup.string().email(incorrectlyFieldMessage).required(requiredFieldMessage),
		password: Yup.string().min(6, shortPasswordMessage).required(requiredPasswordMessage),
	});

	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm({
		defaultValues: {
			email: '',
			password: '',
		},
		resolver: yupResolver(schema),
	});

	const [errorMessages, setErrorMessages] = useState<string[]>([]);
	const { ip } = useTypedSelector((state) => state.auth);
	const { setUser } = useTypedActions((state) => state.auth);

	const login = async ({ identity, password, rememberMe, ip }: ILoginResponse) => {
		try {
			const { data } = await axios({
				url: `/session/sign-in`,
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				method: 'post',
				data: `identity=${identity}&password=${password}&rememberMe=${rememberMe}&ip=${ip}`,
			});

			return data;
		} catch (error) {
			console.error(error);
		}
	};

	const handleLogin = handleSubmit(async (form) => {
		const { email, password } = form;

		try {
			const data = await login({ identity: email, password, rememberMe: 1, ip });

			/* Такой костыль из-за того что бекендер просто возвращает массив со строками, а не обьект */
			if (!data.hasOwnProperty('id')) {
				setErrorMessages(data);
			} else {
				setUser(data);

				push(RoutesEnum.Cabinet);

				showAuthModal(false);
			}
		} catch (error) {
			console.error(error);
		}
	});

	return (
		<form action="#" noValidate onSubmit={handleLogin}>
			<ModalInputs>
				<Controller
					name="email"
					control={control}
					render={({ field: { value, onChange } }) => {
						return (
							<ModalInput
								errorMessage={errors.email?.message}
								error={errors.hasOwnProperty('email')}
								value={value}
								onChange={onChange}
								name="email"
								type="email"
								placeholder="Электронная почта"
							/>
						);
					}}
				/>
				<Controller
					name="password"
					control={control}
					render={({ field: { value, onChange } }) => {
						return (
							<ModalInput
								type="password"
								placeholder="Введите пароль"
								value={value}
								name="password"
								onChange={onChange}
								errorMessage={errors.password?.message}
								error={errors.hasOwnProperty('password')}
							/>
						);
					}}
				/>
				{errorMessages.length > 0
					? errorMessages?.map((error) => (
							<ModalErrorMessage key={error}>{error}</ModalErrorMessage>
					  ))
					: null}
			</ModalInputs>
			<ModalButton onClick={handleLogin}>Войти в аккаунт</ModalButton>
		</form>
	);
};