import { Link } from "wouter";
function NavBar() {
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
            <Link
              href="/cart"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
