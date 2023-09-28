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
          <th><Title></Title></th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
    </Container>
  )
}

export default Cart