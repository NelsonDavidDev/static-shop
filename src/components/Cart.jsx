/* eslint-disable react/prop-types */
import { ClearCartIcon } from "./Icons.jsx";
import { useCart } from "../hooks/useCart.jsx";
import { Link } from "wouter";
import { useState, useEffect } from "react";

function CartItem({
  id,
  urlImagen,
  nombre,
  quantity,
  total,
  addToCart,
  remove1FromCart,
}) {
  return (
    <Link href={"/product/" + id} className="grid grid-col gap-1">
      <img className="w-40 rounded-xl" src={urlImagen[0]} alt={nombre} />
      <div className="text-xs flex flex-col w-40 min-h-16">
        <strong>{nombre}</strong>${total.toLocaleString("es-Co")}
      </div>
      <footer>
        <button>Cantidad: </button>
        <button onClick={remove1FromCart}>-</button>
        {quantity}
        <button onClick={addToCart}>+</button>
      </footer>
    </Link>
  );
}

function Cart({ setCartModal }) {
  const { cart, clearCart, addToCart, remove1FromCart } = useCart();
  const [mensaje, setMensaje] = useState()

  useEffect(() => {let mensajeInicial = ''; // Inicializamos el mensaje como una cadena vacía

  // Iteramos sobre cada producto del carrito
  cart.forEach(producto => {
    // Construimos la cadena con los datos requeridos
    const productoString = `
      Nombre: ${producto.nombre},
      Cantidad: ${producto.quantity},
      Precio: $ ${producto.total.toLocaleString("es-CO")} //
    `;
    
    // Agregamos la cadena del producto al mensaje existente
    mensajeInicial += productoString;
  });

  // Establecemos el mensaje final
  setMensaje(mensajeInicial);
  }, [])
  

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
      onClick={() => setCartModal(false)}
    >
      <div
        className="w-11/12 h-5/6 flex flex-col bg-white p-5 rounded-xl mx-10 my-auto text-black"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div
          className="flex justify-end mb-1 -my-5 -mx-3 hover:cursor-pointer text-xl"
          onClick={() => setCartModal(false)}
        >
          X
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 w-full bg-white p-10 gap-5">
          {cart.map((product) => (
            <div onClick={() => setCartModal(false)} key={product.id}>
              <CartItem
                addToCart={() => addToCart(product)}
                remove1FromCart={() => remove1FromCart(product)}
                {...product}
              />
            </div>
          ))}
        </div>
        <button
          className="rounded-md flex p-2 my-2 bg-green-500 lg:ml-5"
          onClick={() => {
            window.open(
              `https://wa.me/573245708607?text=${encodeURIComponent(mensaje)}`,
              "_blank"
            );
          }}
        >
          Comprar Ahora
        </button>
        <button className="flex justify-center" onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </div>
    </div>
  );
}

export default Cart;