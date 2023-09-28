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
        {products.map((product)=>())}

      </Row>
    </Container>
  );
}

export default Produc;
