import { createContext, useReducer, useEffect} from "react";
import { cartReducer, initialCart } from "../reducer/cartReducer";
import useLocalStorage from "../hooks/useLocalStorage";
export const CartContext = createContext();

export function CartProvider({ children }) {

    const [

        savedCart,

        setSavedCart

    ] = useLocalStorage(

        "cart",

        initialCart

    );

    const [

        cart,

        dispatch

    ] = useReducer(

        cartReducer,

        savedCart

    );

    useEffect(() => {

        setSavedCart(cart);

    }, [cart]);

    return (
      <CartContext.Provider
          value={{
            cart,
            dispatch,
          }}
    >
          {children}
      </CartContext.Provider>
    );

}