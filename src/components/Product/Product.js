import React, { useState, useEffect } from 'react';
import { fakeData } from '../FakeData//fakeData';
const Product = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		setProducts(fakeData);
	}, []);
	return (
		<div>
			<ul>
				{products.map((product) => (
					<li>{product.name}</li>
				))}
			</ul>
		</div>
	);
};

export default Product;
