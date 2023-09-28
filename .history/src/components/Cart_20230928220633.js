import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, deleteFromCart } from '../rtk/slicess/cart-slice'
import { Container, Table, Button } from 'react-bootstrap'

function Cart() {
  const dispatch = useDispatch()
  const state = useSelector((state)=>state.cart);
  const cart;
useEffect(()=>{
   cart = state.cart

},[])
  const totalPrice = cart.reduce((acc, product)=>{
    acc+=product.price;
    return acc
  },0)
  return (
    <Container>
    <h1 className='py-5'>welocme to Cart</h1>
    <h1>Total price :{totalPrice.toFixed(2)} $</h1>
    <Button className='mb-3' onClick={()=>dispatch(clearCart())}>Clear Cart</Button>
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Img</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((item)=>(
    <tr key={item.id}>
    <td>{item.id}</td>
    <td>{item.title}</td>
    <td><img src={item.image} alt="" width={"100px"} height={"120px"} /></td>
    <td>{item.price} $</td>
    <td><Button variant='danger' onClick={()=>dispatch(deleteFromCart(item))}>Delete</Button></td>
  </tr>
        ))}
    
  
      </tbody>
    </Table>
    </Container>
  )
}

export default Cart