/* eslint-disable react/prop-types */
import { useState } from "react";

function Product({ product, setProductModal }) {
  const [currentImage, setCurrentImage] = useState(product.urlImagen[0]);
  const [units, setUnits] = useState(1);


  

  //increase counter
  const increase = () => {
    if (units < 50) {
      setUnits(units + 1);
    }
  };

  //decrease counter
  const decrease = () => {
    if (units > 1) {
      setUnits(units - 1);
    }
  };

  return (
    <div
        className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center "
        onClick={() => setProductModal(false)}
      >
    <div className="grid grid-cols-1 lg:grid-cols-2 bg-white p-5 rounded-xl mx-10 my-auto text-black" onClick={(e) => {
            e.stopPropagation();
          }}>
      <div className="">
        <div className="flex items-center justify-center">
          <img className="w-96 rounded-xl " src={currentImage} />
        </div>

        <div className="flex gap-2 mt-1 rounded-xl">
          {product.urlImagen.map((image, index) => (
            <img
              className={
                image === currentImage
                  ? " w-24 rounded-lg border-solid border-4 border-sky-500"
                  : " w-24 rounded-lg opacity-50 border-solid border-2"
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
      <div className="text-center flex-col flex justify-center mt-10">
        <h2 className="text-3xl font-bold capitalize jus">{product.nombre}</h2>

        {product.descripcion.map((image, index) => (
          <h2 className="text-lg mt-10 " key={index}>{image}</h2>
))}
        

        <div className="h-full p-10 bg-white flex items-end justify-center">
          <div className="">
            <h2 className="text-5xl">
              $ {(product.precio * units).toLocaleString("es-CO")}
            </h2>
            <br />
            <div className="counter">
              <div className="btn__container text-2xl flex justify-center items-center">
                <div className="border border-black rounded-xl h-12 flex items-center justify-center mr-2">
                  <button className="w-10 rounded-md h-full" onClick={decrease}>
                    -
                  </button>
                  <span className="counter__output mx-0 font-bold ">
                    {units}
                  </span>
                  <button className="w-10 rounded-md h-full" onClick={increase}>
                    +
                  </button>
                </div>

                <button
                  className="rounded-md p-2 m-auto bg-sky-500"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Product;
