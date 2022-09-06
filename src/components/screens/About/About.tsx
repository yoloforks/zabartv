import { Title } from '@/UI/Title/Title';
import classNames from 'classnames';
import styles from './About.module.scss';

export const About = () => {
	return (
		<section className={styles.section}>
			<div className={classNames('container', styles.container)}>
				<Title className={styles.title}>О компании</Title>
				<div className={styles.desc}>
					<p>
						Канал многопланово продолжает доминантсептаккорд, не
						случайно эта композиция вошла в диск В.Кикабидзе
						&quot;Ларису Ивановну хочу&quot;. Трехчастная фактурная
						форма, на первый взгляд, представляет собой цикл.
						Показательный пример – струна дает open-air. Кризис
						жанра дает соноропериод. Эффект &quot;вау-вау&quot;, по
						определению, трансформирует мономерный мнимотакт.
						Показательный пример – алеаторика заканчивает автономный
						флэнжер.
					</p>
					<p>
						Дисторшн варьирует композиционный хамбакер. Плотностная
						компонентная форма продолжает позиционный гармонический
						интервал, благодаря широким мелодическим скачкам.
						Аллегро продолжает лайн-ап, не случайно эта композиция
						вошла в диск В.Кикабидзе &quot;Ларису Ивановну
						хочу&quot;.
					</p>
					<p>
						Форшлаг mezzo forte образует структурный райдер.
						Асинхронное ритмическое поле регрессийно продолжает
						рефрен. Легато выстраивает композиционный контрапункт
						контрастных фактур.
					</p>
				</div>
			</div>
		</section>
	);
};
