/* eslint-disable react/prop-types */
import { ClearCartIcon } from "./Icons.jsx";
import { useCart } from "../hooks/useCart.jsx";

function CartItem({ urlImagen, nombre, quantity, total, addToCart, remove1FromCart}) {
  return (
    <div className="gird grid-rows-3">
      {console.log(urlImagen)}
      <img className="w-24 rounded-xl" src={urlImagen[0]} alt={nombre} />
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

function Cart({setCartModal}) {
  const { cart, clearCart, addToCart, remove1FromCart  } = useCart();

  return (
    
      <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center" onClick={() => setCartModal(false)}>
        <div className="w-11/12 h-5/6 grid grid-cols-1 lg:grid-cols-2 bg-white p-5 rounded-xl mx-10 my-auto text-black" onClick={(e) => {
            e.stopPropagation();
          }}>
        <div>
          {cart.map(product => (
          <CartItem key={product.id} addToCart={() => addToCart(product)} remove1FromCart={() => remove1FromCart(product)} {...product}/>
            ))}
        </div>

        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
        </div>
      </div>
  );
}

export default Cart;