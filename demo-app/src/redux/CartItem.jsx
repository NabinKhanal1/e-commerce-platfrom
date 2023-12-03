import React from 'react'
import { useSelector } from 'react-redux'
import ChangeItem from './ChangeItem'
import Student from './Student'
import StudentForm from './StudentForm'

const CartItem = () => {
    const data=useSelector(store=>store.cart)
  return (
    <>
    <h1 className="text-success text-center">
        The total number of items in the cart is {data.cartCount}
    </h1>
    <ChangeItem/>
    <Student/>
    <StudentForm/>
    </>
  )
}

export default CartItem