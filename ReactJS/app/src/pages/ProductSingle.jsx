import React, { useState } from 'react'
import { useParams } from 'react-router'
import { products } from '../constant/products'

export const ProductSingle = () => {
    
    const { id } = useParams()
    
    const [product, setProduct] = useState(products.find(e => e.id == id) || { title: "Product Not Found" })

    return <div>
        {product.title}
    </div>
}

export default ProductSingle
