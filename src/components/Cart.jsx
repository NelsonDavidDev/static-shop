import "./Cart.css";
import { CartIcon, ClearCartIcon } from "./Icons.jsx";
import { useId } from "react";
import { useCart } from "../hooks/useCart.jsx";

function CartItem({ urlImagen, precio, nombre, quantity, addToCart }) {
  return (
    <li>
      <img src={urlImagen[0]} alt={nombre} />
      <div>
        <strong>{nombre}</strong> - ${precio}
      </div>
      <footer>
        <button>Qty: {quantity}</button>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  );
}

function Cart() {
  const cartCheckboxId = useId();
  const { cart, clearCart, addToCart  } = useCart();

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden />

      <aside className="cart">
        <ul>
          {cart.map(product => (
          <CartItem key={product.id} addToCart={() => addToCart(product)} {...product}/>
            ))}
        </ul>

        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
}

export default Cart;
