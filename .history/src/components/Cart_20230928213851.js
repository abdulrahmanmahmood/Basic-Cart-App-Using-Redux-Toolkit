import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFromCart } from '../rtk/slicess/cart-slice'
import { Container, Table, Button } from 'react-bootstrap'

function Cart() {
  const dispatch = useDispatch()
  const cart = useSelector((state)=>state.cart)
  return (
    <Container>
    <h1 className='py-5'>welocme to Cart</h1>
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
    <td><Button variant='danger' onClick={(dispatch(deleteFromCart(item))}>Delete</Button></td>
  </tr>
        ))}
    
  
      </tbody>
    </Table>
    </Container>
  )
}

export default Cart