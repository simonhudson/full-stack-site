'use strict';

import React from 'react';
import Link from 'next/link';

const NAMESPACE = 'main-navigation';

const MainNavigation = props => {

	if (!props.items || !props.items.length) return null;
	
	const createLink = (item, index) => {
		return (
			<li className={`${NAMESPACE}__item`} key={`${NAMESPACE}__item--${index}`}>
				<Link href={item.href}>
					<a className={`${NAMESPACE}__link`}>{item.text}</a>
				</Link>
			</li>
		);
	};

	return (
		<nav className={NAMESPACE}>
			<ul className={`${NAMESPACE}__list`}>
				{props.items.map((item, index) => createLink(item, index))}
			</ul>
		</nav>
	);

};

export default MainNavigation;
