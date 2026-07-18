import CartItem from "./CartItem";
import useCart from "../hooks/useCart";
import { useMemo } from "react";

function Cart() {

    const {cart} = useCart();

    const totalPrice = useMemo(() => {
        return cart.reduce(
            (sum, item) =>

                sum + item.price * item.quantity,
                0
        );
    }, [cart]);

    return (
        <div className="cart">
            <h2>
                Cart
            </h2>

            {cart.length === 0 ? (
                    <p>
                        ไม่มีสิค้า
                    </p>
            ) : (
                    cart.map((item) => (
                        <CartItem
                        key={item.id}
                        item={item}
                        />
                    ))
            )}

            <hr />
            <h3>
                รวมทั้งหมด : {totalPrice} baht
            </h3>
        </div>
    );
}

export default Cart;