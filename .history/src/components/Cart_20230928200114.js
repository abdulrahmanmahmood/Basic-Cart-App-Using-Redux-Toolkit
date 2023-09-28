import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteFromCart } from '../rtk/slicess/cart-slice'

function Cart() {
  const dispatch = useDispatch()
  return (
    <>
    <h1>welocme to cart</h1>
    </>
  )
}

export default Cart