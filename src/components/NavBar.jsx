import { Link } from "wouter";
import { useCart } from "../hooks/useCart.jsx";

function NavBar() {
  const { cart } = useCart();
  return (
    <>
      <nav className="dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a
            href={"/"}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <div className="rounded-lg shadow-white shadow-custom p-2 m-0 self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              LA UNICA
            </div>
          </a>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <a className="text-white" href={`https://wa.me/573245708607`} target="_blank">
              +57 324 570 86 07
            </a>
            <Link
              href="/cart"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex-row flex"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
              &nbsp;{cart.length}
            </Link>
          </div>
        </div>
      </nav>
      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <Link
                  href={"/"}
                  className="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href={"/cart"}
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Carrito
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Quienes somos
                </Link>
              </li>
              <li>
              <Link
                  href={"/faq"}
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Preguntas Frecuentes
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
