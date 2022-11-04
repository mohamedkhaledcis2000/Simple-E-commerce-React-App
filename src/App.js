import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList";
import Slider from "./Components/Slider";
import {Routes,Route} from "react-router-dom"
import About from "./Components/About";
import ProductDetails from "./Components/ProductDetails";
function App() {
  return (
   <>
   <Navbar />
   <Routes>
    <Route path="/" element={
      <>
      <Slider />
      <ProductList />
      </>
    }/>
    <Route path="about" element={
    <>
    <About />
    </>
    }/>
       <Route path="product/:productId" element={<ProductDetails/>}/>

   </Routes>
   
   </>

  );
}

export default App;
