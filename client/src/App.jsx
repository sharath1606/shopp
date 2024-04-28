import { BrowserRouter,Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Products from "./components/Products";
import Login from "./components/Login";
import Dashboard from './components/Dashboard';
import Addproduct from './components/Addproduct';

function App() {
  

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={< Home />}></Route>
      <Route path='/products' element={<Products />}></Route>
      <Route path='/login' element={< Login />}></Route>
      <Route path='/dashboard' element={< Dashboard />}></Route>
      <Route path="/addproduct" element={< Addproduct />}></Route></Routes>
    </BrowserRouter>
    
  )
}

export default App
