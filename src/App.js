import './App.css';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Product from './Components/Product';
import Cart from './Components/Cart';
import {Route,Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
