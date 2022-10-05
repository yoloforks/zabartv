import { Layout } from '@/components/Layout/Layout';
import { Hero, Category, Music } from '@/screens/Home/index';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { wrapper } from '@/store/store';
import { getHomeCategories, getIP } from '@/api';
import type { NextPage } from 'next';

const HomePage: NextPage = () => {
	return (
		<Layout>
			<Hero />
			<Category />
			<Music />
		</Layout>
	);
};

export const getStaticProps = wrapper.getStaticProps(({ dispatch }) => async ({ locale }) => {
	await dispatch(getHomeCategories());
	await dispatch(getIP());

	return {
		props: {
			...(await serverSideTranslations(locale as string)),
		},
	};
});

export default HomePage;
