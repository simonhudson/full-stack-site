'use strict';

import React from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Index = props => {

	return (
		<>
			<h1>Home</h1>
			{props.shows.map(show => (
				<li key={show.id}>
					<Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
						<a>{show.name}</a>
					</Link>
				</li>
			))}
		</>
	);

};

Index.getInitialProps = async function() {
	const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
	const data = await res.json()

	return {
		shows: data.map(entry => entry.show)
	}
}

export default Index;
