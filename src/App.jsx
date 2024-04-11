import Home from "./screens/Home";
import CartScreen from "./screens/CartScreen";
import WpButton from "./components/WpButton";
import { CartProvider } from "./context/cart";
import { Route } from "wouter";
import ProductScreen from "./screens/ProductScreen";

function App() {

  return (
    <CartProvider>
    <Route path="/" component={Home}/>
    <Route path="/cart" component={CartScreen}/>
    <Route path="/product/:id">
        {(params) => <ProductScreen id={params.id} />}
      </Route>
    <WpButton/>
    </CartProvider>
  )
}

export default App