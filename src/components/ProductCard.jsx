import useCart from "../hooks/useCart"
import { useCallback } from "react";

function ProductCard({ product }) {

    const {dispatch} = useCart();

    const addProduct = useCallback(() => {
        dispatch({
            type: "ADD",
            payload: product
        });
    }, [dispatch, product]);

    return (

        <div className="card">
            
            <img 
             src={product.image}
             alt={product.name}
             className="product-image"
            />

            <h2>{product.name}</h2>

            <h2>{product.category}</h2>

            <h2>{product.price} baht</h2>

            <button onClick={addProduct} >
                เพิ่มลงตะกร้า
            </button>
        </div>
    );
}

export default ProductCard;