
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './components/Pages/Home';
import SingleCart from './components/Pages/SingleCart';
import ShoppingCart from './components/Pages/ShoppingCart';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbaar from './components/Comp/Navbaar';
function App() {
  return (
    <div >
    <Navbaar/>  
    <Routes>
      
      <Route path='/' element= {<Home/>}/>
     <Route path= "/cart/:id" element = {<SingleCart/>} />
      <Route path='/shoppingcart' element= {<ShoppingCart/>}/> 
      </Routes>
    </div>
  );
}

export default App;
