import "./products.css";
import { useState } from "react";
import Product from "./../modals/Product";

export function Products({ products }) {
  const [product, setProduct] = useState();
  const [productModal, setProductModal] = useState(false);

  return (
    <>
      <main className="products">
        <ul>
          {products.map((product) => {
            return (
              <li
                key={product.id}
                onClick={() => {
                  setProduct(product);
                  setProductModal(true);
                }}
              >
                <img src={product.urlImagen[0]} alt={product.nombre} />
                <div>
                  <strong>{product.nombre}</strong> - $
                  {(product.precio * 1).toLocaleString("es-CO")}
                </div>
              </li>
            );
          })}
        </ul>
      </main>
      {productModal ? (
        <Product product={product} setProductModal={setProductModal} />
      ) : (
        ""
      )}
    </>
  );
}
