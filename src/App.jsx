import { useState } from 'react';
import './App.css'

import BrowseView from './BrowseView/BrowseView.jsx';
import CartView from './CartView/CartView.jsx';
import ConfirmationView from './ConfirmationView/ConfirmationView.jsx';

function App() {
  const [currentView, setCurrentView] = useState("browse");
  const [catalog, setCatalog] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <>
      {currentView == "browse" && <BrowseView catalog={catalog} setCatalog={setCatalog} cart={cart} setCart={setCart} setCurrentView={setCurrentView} />}
      {currentView == "cart" && <CartView cart={cart} setCurrentView={setCurrentView} totalPrice={totalPrice} setTotalPrice={setTotalPrice} />}
      {currentView == "confirmation" && <ConfirmationView setCurrentView={setCurrentView} cart={cart} setCart={setCart} totalPrice={totalPrice} setTotalPrice={setTotalPrice} />}
    </>
  )
}

export default App
