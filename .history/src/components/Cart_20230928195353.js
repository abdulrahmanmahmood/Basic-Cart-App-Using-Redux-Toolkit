import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteFromCart } from '../rtk/slicess/cart-slice'

function Cart() {
  const dispatch = useDispatch()
  return (
    <div>
      <button onClick={()=>dispatch(deleteFromCart())}>delete from cart</button>
    </div>
  )
}

export default Cart