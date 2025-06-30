import { useNavigate } from "react-router"
import { products } from "../constant/products"


export const Products = () => {

    const navigate = useNavigate()

    return <div>
        {
            products.map(product => {
                return <div key={product.id}>
                    <h3>{product.title}</h3>
                    <b>${product.price}</b>
                    <button onClick={() => navigate(`/products/${product.id}`)} className="btn btn-success rounded">View</button>
                </div>
            })
        }
    </div>
}

export default Products
