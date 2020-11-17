/** @format */

import React, { Fragment } from 'react'
import { Col, Row } from 'react-bootstrap'
import products from '../products'
import Product from '../components/Product'

const HomeScreen = () => {
	console.log('products', products)
	return (
		<Fragment>
			<h1>Latest Products</h1>
			<Row>
				{products.map((product) => (
					<Col sm={12} md={6} lg={4} xl={3}>
						<Product product={product} />
					</Col>
				))}
			</Row>
		</Fragment>
	)
}

export default HomeScreen
