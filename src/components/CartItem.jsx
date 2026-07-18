import useCart from "../hooks/useCart";

function CartItem({ item }) {

  const { dispatch } = useCart();

  return (
    <div className="cart-item">
      <div>
        <h4>{item.name}</h4>
        <p>{item.price} บาท</p>
      </div>

      <div>
        <button
          onClick={() =>
            dispatch({
              type: "DECREASE",
              payload: item.id,
            })
          }
        >
          -
        </button>

        <span style={{ margin: "0 10px" }}>
          {item.quantity}
        </span>

        <button
          onClick={() =>
            dispatch({
              type: "INCREASE",
              payload: item.id,
            })
          }
        >
          +
        </button>
      </div>
    </div>
  );
}

export default CartItem;