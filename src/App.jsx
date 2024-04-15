import products from "./products.json";
import "./App.css";
//import Product from  "./Product";
import Cart from "./components/Cart";
import Product from "./components/Product";


function App() {

  return (
    <div className="App">
    <Cart />
    <div className="products">
      {products.map((product) => (

        <Product {...product} />
      ))}
    </div>
  </div>
  )
}

export default App




