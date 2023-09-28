import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteFromCart } from '../rtk/slicess/cart-slice'
import { Container, Table } from 'react-bootstrap'

function Cart() {
  const dispatch = useDispatch()
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
        {cart.map()}
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
  
      </tbody>
    </Table>
    </Container>
  )
}

export default Cart