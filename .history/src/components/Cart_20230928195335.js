import React from 'react'
import { useDispatch } from 'react-redux'

function Cart() {
  const dispatch = useDispatch()
  return (
    <div>
      <button onClick={()=>dispatch()}>delete from cart</button>
    </div>
  )
}

export default Cart