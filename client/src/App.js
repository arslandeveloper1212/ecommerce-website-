
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './components/Pages/Home';
import SingleCart from './components/Pages/SingleCart';
import ShoppingCart from './components/Pages/ShoppingCart';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbaar from './components/Comp/Navbaar';
import SignUp from './components/Pages/SignPages/SignUp';
import SignIn from './components/Pages/SignPages/SignIn';
function App() {
  return (
    <div >
    <Navbaar/>  
    <Routes>
      
      <Route path='/' element= {<Home/>}/>
      <Route path= "/cart/:id" element = {<SingleCart/>} />
      <Route path='/shoppingcart/:id' element= {<ShoppingCart/>}/> 
      <Route path='/register' element= {<SignUp/>}/>
      <Route path= '/login' element= {<SignIn/>}/>
      </Routes>
    </div>
  );
}

export default App;
