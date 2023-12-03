import React, { useState, useEffect } from 'react'
import Card from '../Components/Card'
import axios from 'axios'

const Product = () => {
  const [product, setProduct] = useState([])
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products`)
      .then(res => {
        setProduct(res.data)

      })
      .catch(err => console.log(err))
  }, [])
  return (
    <>
      <div className="container-fluid">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {product.map((item,i) => (
            <Card data={item}  key={i}/>

          ))}

        </div>
      </div>

    </>
  )
}

export default Product