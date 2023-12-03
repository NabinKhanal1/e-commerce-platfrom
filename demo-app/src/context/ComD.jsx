import React,{useContext} from 'react'
import { Global } from './GlobalContext'

const ComD = () => {
    const data=useContext(Global)
  return (
    <>
    <h1>The name of the student is {data.fullName}</h1>
    <h1>The course title is {data.subject}</h1>
    </>
  )
}

export default ComD