import React, { useContext } from 'react'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ModeProvider, Modecontext } from './context/Modecontent';
import Home from "./pages/Home"
import { LangProvider } from './context/Langcontext';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import Dashboard from './pages/admin/Dashboard';
import Addcar from './pages/admin/updates/Addcar';
import Editcar from './pages/admin/updates/Editcar';
import Productdetails from './pages/Productdetails';
import Login from './pages/Login';
import { CartProvider } from 'react-use-cart';
import Cartpage from './pages/Cartpage';
import Buy from './pages/Buy';
import Fag from './pages/Fag';
import CartWishlistUser from './pages/CartWishlistUser';
import { WishlistProvider } from './context/WishlistContext';
import SuccesfullyBuy from './pages/SuccesfullyBuy';
import Registration from './pages/Registration';
import ProductdetailsWishlist from './pages/ProductdetailsWishlist';

const Main = () =>{
  const [mode] = useContext(Modecontext)
  return (
    <div className={mode}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/fag" element={<Fag />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/admin" element={<Dashboard />}></Route>
        <Route path="/admin/add" element={<Addcar />}></Route>
        <Route path="/admin/edit/:id" element={<Editcar />}></Route>
        <Route path="/productdetails/:id" element={<Productdetails />}></Route>
        <Route
          path="/productdetailswishlist/:id"
          element={<ProductdetailsWishlist />}
        ></Route>
        <Route path="/cartpage" element={<Cartpage />}></Route>
        <Route path="/wishlist" element={<CartWishlistUser />}></Route>
        <Route path="/buy" element={<Buy />}></Route>
        <Route path="/registration" element={<Registration />}></Route>
        <Route path="/succesfullybuy" element={<SuccesfullyBuy />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

 
const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <WishlistProvider>
          <LangProvider>
            <ModeProvider>
              <Main />
            </ModeProvider>
          </LangProvider>
        </WishlistProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App