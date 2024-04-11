/* eslint-disable react/prop-types */
import { Link } from "wouter";

export function Products({ products }) {
  return (
    <>
      <main className="flex justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 w-full bg-white p-10 gap-5">
          {products.map((product) => {
            return (
              <Link className="flex flex-col justify-center"
              href={"/product/" + product.id}
                key={product.id}
              >
                <img className="w-40" src={product.urlImagen[0]} alt={product.nombre} />
                <div className="flex flex-col w-40">
                  <strong>{product.nombre}</strong> 
                  ${(product.precio * 1).toLocaleString("es-CO")}
                </div>
              </Link>
            );
          })}
          </div>
      </main>
    </>
  );
}