import ProductList from "./components/ProductList"
import ProductProvider from "./context/ProductProvider"


const App = () => {
  return (
    <div>
      <ProductProvider>
        <ProductList/>      
      </ProductProvider>
    </div>
  )
}

export default App
