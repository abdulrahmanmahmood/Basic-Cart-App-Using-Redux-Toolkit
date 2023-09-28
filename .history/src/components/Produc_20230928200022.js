import React, { useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../rtk/slicess/products-slice";
import { AddToCart } from "../rtk/slicess/cart-slice";

function Produc() {
  const products = useSelector((state)=>state.products);
  const cart = useSelector((state)=>state.cart)
  

  console.log(products);
  console.log(cart);


  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchProducts());
  console.log(cart);

  },[])
  return (
    <Container cl>
      <Row>
        {products.map((product)=>(
                  <Col key={product.id}>
                  <Card style={{ width: "18rem" , height:"700px" }}>
                    <Card.Img style={{width:"250px", height:"300px"}} variant="top" src={product.image} />
                    <Card.Body>
                      <Card.Title>{product.Title}</Card.Title>
                      <Card.Text>
                      {product.description}
                      </Card.Text>
                      <Card.Text>
                      {product.price} $
                      </Card.Text>
                      <Button variant="primary" onClick={()=>dispatch(AddToCart(product))}>Add to cart</Button>
                    </Card.Body>
                  </Card>
                </Col>
        ))}

      </Row>
    </Container>
  );
}

export default Produc;
