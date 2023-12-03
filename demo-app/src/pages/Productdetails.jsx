import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Productdetails = () => {
    const [product, setProduct] = useState({})
    const params = useParams()
    const id = params.productId
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err))
    },[id])

    // add to cart
    const addToCart=()=>{
        const cartItems=JSON.parse(localStorage.getItem('cartData')) || []
        const productItem={
            id:product.id,
            title:product.title,
            price:product.price,
            description:product.description,
            image:product.image,
            quantity:1

        }
        // check if item is present in the cart or not
        const existingItem=cartItems.find(item=>item.id===product.id)
        if(existingItem){
            toast.error('product is already exist in the cart')
        }
        else{
            cartItems.push(productItem)
            localStorage.setItem('cartData',JSON.stringify(cartItems))
            toast.success(`${product.title} is add to cart`)
        }
    }
    return (
        <>
        <ToastContainer theme='colored' position='top-center'/>
            <div className='container'>
                <div className="row d-flex justify-content-around my-4 align-items-center">
                    <div className="col-md-3">
                        <img src={product.image} alt={product.title} width={300} />
                    </div>
                    <div className="col-md-8">
                        <h1>{product.title}</h1>
                        <h2>${product.price}</h2>
                        <p>{product.description}</p>
                        <p className='text-info'><strong>Category</strong>:{product.category}</p>
                        <div className="my-3">
                            <button className='btn btn-warning' onClick={addToCart}>Add to cart</button>
                        </div>

                    </div>
                </div>

            </div>


        </>
    )
}

export default Productdetails