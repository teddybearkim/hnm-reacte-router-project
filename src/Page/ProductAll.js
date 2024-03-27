import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard'
import { Container, Row, Col } from 'react-bootstrap'

const ProductAll = () => {
  const [products, setProductList] = useState([])
  const getProducts = async () => {
    let url = `http://localhost:5000/products`
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  }
  useEffect(() => {
    getProducts()
  }, [])
  return (
    
      <Container>
        <Row>
          {products.map((menu) => (
            <Col lg={3}>
              <ProductCard item={menu} />
            </Col>
          ))}

        </Row>
      </Container>
    
  )
}

export default ProductAll
