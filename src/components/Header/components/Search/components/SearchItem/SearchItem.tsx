import { IMovie } from '@/types/IMovie';
import React, { FC } from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import styles from './SearchItem.module.scss';
import { Chip } from '@/UI/Chip/Chip';

interface SearchItemProps {
	item: [IMovie];
}

export const SearchItem: FC<SearchItemProps> = ({ item }) => {
	const {
		id,
		img_base_url,
		img_path,
		type,
		rating,
		content: { title },
	} = { ...item[0] };

	const url = `${img_base_url}/${img_path}`;

	const category = type === 1 ? 'Фильм' : 'Сериал';

	return (
		<NextLink href={`/movie/${id}`}>
			<a className={styles.item}>
				<div className={styles.left}>
					<div className={styles.imageWrapper}>
						<Image layout="fill" className={styles.image} src={url} />
					</div>
					<div className={styles.text}>
						<Chip className={styles.chip}>{category}</Chip>
						<h2 className={styles.title}>{title}</h2>
					</div>
				</div>
				<div className={styles.rating}>{Number(rating).toFixed(1)}</div>
			</a>
		</NextLink>
	);
};
