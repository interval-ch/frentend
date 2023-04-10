import React from 'react';
import './blog.css';

import { Article } from '../../components';

const Blog = () => {
	return (
		<div className="gpt3__blog">
			<h1>A lot is happening, We are blogging about it.</h1>
			<div className="gpt3__blog-container">
				<Article />
				<Article />
				<Article />
				<Article />
				<Article />
			</div>
		</div>
	)
}

export default Blog