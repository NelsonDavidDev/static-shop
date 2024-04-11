/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useCart } from "../hooks/useCart.jsx";
import { products } from "../mocks/products.json";

function Product({ id }) {
  const [currentImage, setCurrentImage] = useState();
  const { addToCart } = useCart();
  const [product, setProduct] = useState();
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    // Buscar el producto con el mismo ID que el proporcionado en la URL
    const productId = parseInt(id);

    // Buscar el producto con el mismo ID que el proporcionado en la URL
    const foundProduct = products.find((product) => product.id === productId);

    // Si se encuentra el producto, establecerlo en el estado
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      console.log("No se encontró el producto con el id", productId);
    }
  }, [id]);

  useEffect(() => {
    if (product !== undefined) {
      setCurrentImage(product.urlImagen[0]);
      setMensaje(
        `¡Hola! Estoy interesado en comprar el producto "${product.nombre}" por un precio de ${product.precio} pesos. ¿Cómo puedo continuar con la compra?`
      );
    }
  }, [product]);

  return (
    <>
      {product && (
        <div
          className="w-full flex flex-row  bg-white p-5 text-black xl:px-32"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="flex flex-col lg:flex-row">
            <div className="flex flex-col gap-2 mt-1 rounded-xl justify-center mx-auto">
              <div className="flex justify-center">
                <img
                  className="aspect-auto w-80 rounded-xl "
                  src={currentImage}
                />
              </div>
              <div className="flex justify-center">
                {product.urlImagen.map((image, index) => (
                  <img
                    className={
                      image === currentImage
                        ? "aspect-auto w-24 rounded-lg border-solid border-4 border-sky-500"
                        : "aspect-auto w-24 rounded-lg  border-solid border-2"
                    }
                    key={index}
                    src={image}
                    alt={`Producto ${index + 1}`}
                    onClick={() => setCurrentImage(image)}
                    onMouseOver={() => setCurrentImage(image)}
                  />
                ))}
              </div>
            </div>
            <div className="text-center flex-col flex justify-center items-center ml-5">
              <h2 className="text-2xl font-bold capitalize">
                {product.nombre}
              </h2>

              {product.descripcion.map((desc, index) => (
                <p
                  className="text-lg mt-4 w-96"
                  key={index}
                >
                  {desc}
                </p>
              ))}
            </div>
          </div>
          <div className="h-auto bg-white flex flex-col items-center lg:justify-center lg:w-96">
            <div className="text-4xl">
              $ {product.precio.toLocaleString("es-CO")}
            </div>

            <div className="btn__container text-2xl flex flex-col lg:flex-row">
              <button
                className="rounded-md flex p-2 my-2 bg-sky-500"
                onClick={() => {
                  addToCart(product);
                }}
              >
                Añadir al carrito
              </button>
              <button
                className="rounded-md flex p-2 my-2 bg-green-500 lg:ml-5"
                onClick={() => {
                  window.open(
                    `https://wa.me/573234584625?text=${encodeURIComponent(
                      mensaje
                    )}`,
                    "_blank"
                  );
                }}
              >
                Comprar Ahora
              </button>
            </div>
          </div>
        </div>
      )}
      <h2 className="text-xl font-bold mx-10 mt-20">Productos similares</h2>
    </>
  );
}

export default Product;
