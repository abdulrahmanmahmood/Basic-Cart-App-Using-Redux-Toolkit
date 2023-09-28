import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteFromCart } from '../rtk/slicess/cart-slice'
import { Container } from 'react-bootstrap'

function Cart() {
  const dispatch = useDispatch()
  return (
    <Container>
    <h1 className='py-5'>welocme to Cart</h1>
    </Container>
  )
}

export default Cart