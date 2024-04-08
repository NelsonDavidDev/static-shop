import { products } from "./mocks/products.json"
import NavBar from "./components/NavBar";
import Header from "./components/Header"
import { Products } from "./components/Products";
import Cart from "./components/Cart";
import WpButton from "./modals/WpButton";
import { CartProvider } from "./context/cart";
import { Footer } from "./components/Footer";

function App() {

  return (
    <CartProvider>
    <NavBar/>
    <Header/>
    <Cart/>
    <Products products={products}/>
    <WpButton/>
    <Footer/>
    </CartProvider>
  )
}

export default App
