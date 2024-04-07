import { useState, useEffect } from "react";
import Product from "./../modals/Product"

function Products() {
  const [product, setProduct] = useState()
  const [productModal, setProductModal] = useState(false)
  const [products, setProducts] = useState([
    ]);

  useEffect(() => {
    setProducts([{
      nombre: "Trapera Super, 350 gramos, Docena (12 Unidades)",
      precio: 84000,
      descripcion:["Con un peso de tan solo 350 gramos, esta trapera es liviana y fácil de manejar.",
      
      "Además, viene equipada con una colgadera de plástico y un casquillo protector para garantizar su durabilidad y facilitar su almacenamiento cuando no está en uso.",
      
      "Construida con palos de madera tipo sota de 140 centimetrosm de longitud, la Trapera Súper ofrece una estructura sólida y resistente.",
      
      "Disponible en dos opciones de color: blanco clásico o negro trenzado con blanco.",

      "Si vas a comprar por docena para tu negocio o emprendimiento, mira nuestras otras publicaciones y obten descuento."],
      urlImagen: ["/products/docena super 350g/super (2).jpg", "/products/docena super 350g/super (1).jpg", "/products/docena super 350g/super (3).jpg"],
    },
    {
      nombre: "Trapera Industrial, 300 gramos, Docena (12 Unidades)",
      precio: 77000,
      descripcion:["Con un peso de tan solo 300 gramos, esta trapera es liviana y fácil de manejar.",
      
      "Además, viene equipada con una colgadera de plástico y un casquillo protector para garantizar su durabilidad y facilitar su almacenamiento cuando no está en uso.",
      
      "Construida con palos de madera tipo sota de 140 centimetrosm de longitud, la Trapera Súper ofrece una estructura sólida y resistente.",
      
      "Disponible en dos opciones de color: blanco clásico o negro trenzado con blanco.",

      "Si vas a comprar por docena para tu negocio o emprendimiento, mira nuestras otras publicaciones y obten descuento."],
      urlImagen: ["/products/docena industrial 300g/industrial (2).jpg", "/products/docena industrial 300g/industrial (3).jpg"],
    },
    {
      nombre: "Trapera Economica, 250 gramos, Docena (12 Unidades)",
      precio: 61000,
      descripcion:["Con un peso de tan solo 250 gramos, esta trapera es liviana y fácil de manejar.",
      
      "Además, viene equipada con una colgadera de plástico y un casquillo protector para garantizar su durabilidad y facilitar su almacenamiento cuando no está en uso.",
      
      "Construida con palos de madera tipo sota de 130 centimetrosm de longitud, la Trapera Súper ofrece una estructura sólida y resistente.",
      
      "Disponible en dos opciones de color: blanco clásico o negro trenzado con blanco.",

      "Si vas a comprar por docena para tu negocio o emprendimiento, mira nuestras otras publicaciones y obten descuento."],
      urlImagen: ["/products/docena economica 250g/economica (1).jpg", "/products/docena economica 250g/economica (2).jpg"],
    },
  ])
  }, [])

  return (
    <>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-1 mx-20 mt-5 bg-white rounded-3xl">
      {" "}
      {/* Contenedor de los productos */}
      {products.map((product, index) => (
        <div
          onClick={() =>
            {setProduct(product); setProductModal(true)}
          }
          key={index}
          className="text-black hover:cursor-pointer w-72 hover:text-cyan-500 p-11"
        >
          {" "}
          {/* Estilo para cada producto */}
          
            <img
              className="w-full rounded-lg"
              src={product.urlImagen[0]}
              alt={product.nombre}
            />
            <h3 className="text-md capitalize ">{product.nombre}</h3>
            <p className="text-xl text-black">
              $ {(product.precio * 1).toLocaleString("es-CO")}
            </p>
        </div>
      ))}
    </div>
    {productModal ? <Product product={product} setProductModal={setProductModal}/> : ""}
    
    </>
  );
}

export default Products;
