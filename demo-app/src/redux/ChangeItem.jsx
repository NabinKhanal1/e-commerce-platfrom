import React from 'react'
import { useDispatch } from 'react-redux'

const ChangeItem = () => {
    const dispatch=useDispatch()

    const add=()=>(
        dispatch({type:'ADD_TO_CART'})
    )
    const subtract=()=>(
        dispatch({type:'SUBTRACT_TO_CART'})
    )
    
    
  return (
    <>
    <div className="my-2">
        <div className="row d-flex justify-content-around">
            <div className="col-4">
                <button className='btn btn-primary' onClick={add}>Add</button>
            </div>
            <div className="col-4">
                <button className='btn btn-danger' onClick={subtract}>Remove</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default ChangeItem
