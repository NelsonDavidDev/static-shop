import { products } from "./mocks/products.json"
import NavBar from "./components/NavBar";
import Header from "./components/Header"
import { Products } from "./components/Products";
import Cart from "./components/Cart";
import WpButton from "./modals/WpButton";
import { CartProvider } from "./context/cart";
import { Footer } from "./components/Footer";
import { useState } from "react";
import { Route } from "wouter";
import Product from "./modals/Product";

function App() {

  const [cartModal, setCartModal] = useState(false)

  return (
    <CartProvider>
    <NavBar cartModal={cartModal} setCartModal={setCartModal}/>
    <Route path="/" component={Header}/>
    {cartModal ? <Cart setCartModal={setCartModal}/> : ""}
    <Route path="/product/:id">
        {(params) => <Product id={params.id} />}
      </Route>
    <Products products={products}/>
    <WpButton/>
    <Footer/>
    </CartProvider>
  )
}

export default App
