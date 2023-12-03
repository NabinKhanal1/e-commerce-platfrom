import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaTrash } from 'react-icons/fa';


const Cart = () => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        const cartData = JSON.parse(localStorage.getItem('cartData'))
        setProduct(cartData)
    }, [])
    // incerase quantity
    const increaseQty = id => {
        const updateProduct = product.map(item => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 }

            }
            return item
        })
        setProduct(updateProduct)
        localStorage.setItem('cartData', JSON.stringify(updateProduct))
    }
    //     decrease quantity
    const decreaseQty = id => {
        const updateProduct = product.map(item => {
            if (item.id === id && item.quantity>1) {
                return { ...item, quantity: item.quantity - 1 }

            }
            return item
        })
        setProduct(updateProduct)
        localStorage.setItem('cartData', JSON.stringify(updateProduct))
    }
    // remove from the cart
    const removeCartHandler=(id,name)=>{
        const confirmed=window.confirm('Are you sure want to delete this item from cart')
        if(confirmed){
            const filterCart=product.filter(item=>item.id!==id)
            localStorage.setItem('cartData',JSON.stringify(filterCart))
            toast.success(`${name} is removed from the cart`)
        }
    }
    
    return (
        <>
            <ToastContainer theme='colored' position='top-center' />
            <div className="container">
                <div className="row d-flex justify-content-between my-5">
                   { product.length===0 ?
                    <h2 className='mt-4 text-center text-danger'>
                        Your cart is empty
                    </h2>
                    :(
                    <>
                        <h2 className='text-center'>
                            Your cart Items
                        </h2>
                        <div className="col-md-8 shadow">
                            {product.map((item,i)=>(
                                <div key={i}>
                                    <hr />
                                    <div className="row d-flex aligh-item-center">
                                        <div className="col-2">
                                            <img src={item.image} alt={item.title} width={'50'} />
                                        </div>
                                        <div className="col-3">
                                            <strong>{item.title}</strong>
                                        </div>
                                        <div className="col-2 text-warning">
                                            ${item.price}
                                        </div>
                                        <div className="col-3">
                                            <button className='btn btn-primary' onClick={()=>increaseQty(item.id)}>+</button>
                                            &nbsp;
                                            <span>{item.quantity}</span>
                                            &nbsp;
                                            <button className='btn btn-danger' onClick={()=>decreaseQty(item.id)}>-</button>
                                        </div>
                                        <div className="col-1">
                                            <button className='btn btn-danger' onClick={()=>removeCartHandler(item.id,item.title)}><FaTrash/></button>
                                        </div>
                                    </div>
                                </div>

                            ))}
                        </div>
                            
                        <div className="col-md-3">
                            <div className="shadow p-2">
                                <h5>Cart Summary</h5>
                                <hr />
                                <p><strong>Units:</strong>
                                    {product.reduce((ac, item) => (ac + Number(item.quantity)), 0)}
                                </p>
                                <p><strong>Total:</strong>
                                    ${product.reduce((ac, item) => (ac + item.price * item.quantity), 0)}
                                </p>
                                <hr />
                                <button className='btn btn-warning'>Check out</button>


                            </div>
                        </div>
                    </>

                    )
              }



                </div>
            </div>

        </>
    )
}

export default Cart