/* eslint-disable react/prop-types */
import { ClearCartIcon, WpIcon } from "./Icons.jsx";
import { useCart } from "../hooks/useCart.jsx";
import { Link } from "wouter";
import { useState, useEffect } from "react";
import Faq from "./Faq.jsx";
import BuyNow from "./BuyNow.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
          <strong className="font-semibold">{nombre}</strong>
          <h2 className="font-bold">${total.toLocaleString("es-Co")}</h2>
        </div>
      </Link>
      <footer>
        <button>Cantidad: </button>
        <button
          className="bg-red-500 rounded-lg px-2 mr-1 ml-2"
          onClick={remove1FromCart}
        >
          -
        </button>
        {quantity}
        <button
          className="bg-green-500 rounded-lg px-2 ml-1"
          onClick={addToCart}
        >
          +
        </button>
      </footer>
    </div>
  );
}

function Cart() {
  const { cart, clearCart, addToCart, remove1FromCart } = useCart();
  const [mensaje, setMensaje] = useState("");
  const [total, setTotal] = useState(0);
  const [buyNowModal, setBuyNowModal] = useState(false);

  const notification = () => {
    toast.info("Carrito vaciado", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  function buyNow() {
    let mensajeInicial = ""; // Inicializamos el mensaje como una cadena vacía

    // Iteramos sobre cada producto del carrito
    cart.forEach((producto) => {
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
    cart.forEach((producto) => {
      // Construimos la cadena con los datos requeridos
      const productoString = parseInt(producto.total);

      // Agregamos la cadena del producto al mensaje existente
      valorInicial += productoString;
    });

    // Establecemos el mensaje final
    setTotal(valorInicial);
  }, [cart]);

  return (
    <>
      <ToastContainer />
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
        {cart.length == 0 ? (
          <div className="flex justify-center font-bold mb-10">
            <div>Tu carrito está vacío</div>
          </div>
        ) : (
          <>
            <div className="flex justify-center font-bold">
              <div>Total: ${total.toLocaleString("es-CO")}</div>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-2 p-10 text-white">
              <button
                className="flex justify-center bg-sky-500 w-40 rounded-lg p-1"
                onClick={() => {
                  buyNow();
                  setBuyNowModal(true);
                }}
              >
                <WpIcon /> &nbsp;Comprar Ahora
              </button>
              <button
                className="flex justify-center bg-gray-900 w-40 rounded-lg p-1"
                onClick={() => {
                  setMensaje("");
                  clearCart();
                  notification();
                }}
              >
                <ClearCartIcon /> &nbsp;Vaciar Carrito
              </button>
            </div>
          </>
        )}

        <Faq />
      </div>
      {buyNowModal ? (
        <BuyNow
          buyNowModal={buyNowModal}
          setBuyNowModal={setBuyNowModal}
          mensaje={mensaje}
          total={total}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default Cart;
