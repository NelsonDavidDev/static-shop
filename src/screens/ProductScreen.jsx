import NavBar from '../components/NavBar'
import Product from "../components/Product";
import Products from "../components/Products";

// eslint-disable-next-line react/prop-types
function ProductScreen({id}) {
  return (
    <>
    <NavBar/>
    <Product id={id}/>
    <Products/>
    </>
  )
}

export default ProductScreen