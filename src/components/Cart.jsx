/* eslint-disable react/prop-types */
import { ClearCartIcon,WpIcon } from "./Icons.jsx";
import { useCart } from "../hooks/useCart.jsx";
import { Link } from "wouter";
import { useState, useEffect } from "react";
import Faq from "./Faq.jsx";

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
    <div>
    <Link href={"/product/" + id} className="grid grid-col gap-1">
      <img className="w-40 rounded-xl" src={urlImagen[0]} alt={nombre} />
      <div className="text-xs flex flex-col w-40 min-h-16">
        <strong>{nombre}</strong>${total.toLocaleString("es-Co")}
      </div>
      </Link>
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
  const { cart, clearCart, addToCart, remove1FromCart } = useCart();
  const [mensaje, setMensaje] = useState("")
  const [total, setTotal] = useState(0)

  function buyNow() {
    let mensajeInicial = ''; // Inicializamos el mensaje como una cadena vacía

  // Iteramos sobre cada producto del carrito
  cart.forEach(producto => {
    // Construimos la cadena con los datos requeridos
    const productoString = `Nombre: ${producto.nombre},
      Cantidad: ${producto.quantity},
      Precio: $ ${producto.total.toLocaleString("es-CO")} //

    `;
    
    // Agregamos la cadena del producto al mensaje existente
    mensajeInicial += productoString;
  });

  // Establecemos el mensaje final
  setMensaje(mensajeInicial);
  }

  useEffect(() => {
    buyNow();

    let valorInicial = 0; // Inicializamos el mensaje como una cadena vacía

    // Iteramos sobre cada producto del carrito
    cart.forEach(producto => {
      // Construimos la cadena con los datos requeridos
      const productoString = parseInt(producto.total)
      
      // Agregamos la cadena del producto al mensaje existente
      valorInicial += productoString;
    });
  
    // Establecemos el mensaje final
    setTotal(valorInicial);
  }, [cart],)

  return (
    
      <div className="h-screen">
        <div className="flex flex-col justify-center items-center sm:grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 w-full bg-white p-10">
          {cart.map((product) => (
              <CartItem
              key={product.id}
                addToCart={() => addToCart(product)}
                remove1FromCart={() => remove1FromCart(product)}
                {...product}
              />
          ))}
        </div>
        <div className="flex justify-center font-bold">
        <div>Total: ${total.toLocaleString("es-CO")}</div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-2 p-10">
          
        <button
          className="flex justify-center bg-green-500 w-40 rounded-lg p-1"
          onClick={() => {
           buyNow();
          }}
        >
          <WpIcon/> Comprar Ahora
        </button>
        <button className="flex justify-center bg-red-500 w-40 rounded-lg p-1" onClick={() => {setMensaje(""); clearCart()}}>
          <ClearCartIcon/> Vaciar Carrito
        </button>
        </div>
        <div className="flex justify-center flex-col items-center">
          <div className="font-bold text-xl text-center   mb-5">Copia el siguiente texto y envianoslo por <a className="text-green-600" href="">WhatsApp</a> junto a tu dirección. <br/> Te responderemos con la cotización del domicilio.</div>
          <div className="w-2/6 mb-10" style={{ whiteSpace: 'pre-line' }}>{mensaje} Total: {total.toLocaleString("es-CO")}</div>
        </div>
        <Faq/>
        </div>
  );
}

export default Cart;