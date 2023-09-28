import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteFromCart } from '../rtk/slicess/cart-slice'

function Cart() {
  const dispatch = useDispatch()
  return (
    <>
    <h1 className='py-5'>welocme to Cart</h1>
    </>
  )
}

export default Cart