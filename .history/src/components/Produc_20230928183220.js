import React, { useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../rtk/slicess/products-slice";

function Produc() {
  const products = useSelector((state)=>state.products)

  console.log(products);


  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchProducts());
  },[])
  return (
    <Container>
      <Row>
        {products.map((product)=>(
                  <Col key={product.id}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={product.Img} />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up
                        the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Col>
        ))}

      </Row>
    </Container>
  );
}

export default Produc;
