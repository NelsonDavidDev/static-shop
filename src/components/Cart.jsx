import "./Cart.css";
import { CartIcon, ClearCartIcon } from "./Icons.jsx";
import { useId } from "react";
import { useCart } from "../hooks/useCart.jsx";

function CartItem({ urlImagen, precio, nombre, quantity, total, addToCart, remove1FromCart }) {
  return (
    <div className="gird grid-rows-3">
      <img src={urlImagen[0]} alt={nombre} />
      <div>
        <strong>{nombre}</strong> -  ${(total).toLocaleString("es-Co")}
      </div>
      <footer>
        <button>Cantidad: </button>
        <button onClick={remove1FromCart}>-</button>
        {quantity}
        <button onClick={addToCart}>+</button>
      </footer>
    </div>
  );
}

function Cart() {
  const cartCheckboxId = useId();
  const { cart, clearCart, addToCart, remove1FromCart  } = useCart();

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden />

      <div className="cart">
        <div>
          {cart.map(product => (
          <CartItem key={product.id} addToCart={() => addToCart(product)} remove1FromCart={() => remove1FromCart(product)} {...product}/>
            ))}
        </div>

        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </div>
    </>
  );
}

export default Cart;