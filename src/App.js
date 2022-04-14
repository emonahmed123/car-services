import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Checkout from './Pages/Checkout/Checkout';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Regester from './Pages/Login/Regester/Regester';
import RequreAuth from './Pages/Login/RequreAuth/RequreAuth';
import ServicesDetails from './Pages/ServicesDetails/ServicesDetails';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';


function App() {
  return (
    <div >
      <Header></Header>
     <Routes>
         <Route path='/' element={<Home/>}></Route>
         <Route path='/home' element={<Home/>}></Route>
           <Route path ='/service/:serviceId' element={<ServicesDetails/>}></Route>
           <Route path='/login' element={<Login/>}></Route>
            <Route path='/about' element={<About></About>}></Route>
            <Route path='/checkout' element={
                <RequreAuth>
                    <Checkout/>
                </RequreAuth>

            }></Route>
             <Route path='/register' element={<Regester/>}></Route>
           <Route path='*' element={<NotFound></NotFound>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
