import { useState, useEffect } from 'react';
import './App.css'

import BrowseView from './BrowseView/BrowseView.jsx';
import CartView from './CartView/CartView.jsx';
import ConfirmationView from './ConfirmationView/ConfirmationView.jsx';

function App() {
    const [currentView, setCurrentView] = useState("browse");
    const [catalog, setCatalog] = useState([]);
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [uniqueItems, setUniqueItems] = useState([]);
    const [itemCounts, setItemCounts] = useState({});

    const defaultOrderInfo = {
        fullName: "",
        email: "",
        card: "",
        address: "",
        address2: "",
        city: "",
        state: "",
        zip: ""
    };

    const [orderInfo, setOrderInfo] = useState(defaultOrderInfo);

    function setOrderInfoField(key, value) {
        setOrderInfo(prev => ({
            ...prev,
            [key]: typeof value === "string" ? value.trim() : value
        }));
    }

    useEffect(() => {
        const uniques = cart.filter((item, index, self) => self.findIndex(i => i.id === item.id) === index);

        setUniqueItems(uniques);

        const newCounts = {};
        let newTotal = 0;

        uniques.forEach(item => {
            const itemCount = cart.filter(i => i.id === item.id).length;
            newCounts[item.id] = itemCount;
            newTotal += item.price * itemCount;
        });

        setItemCounts(newCounts);
        setTotalPrice(newTotal);
    }, [cart]);

    function returnFromConfirmToBrowse() {
        setCart([]);

        setOrderInfo(defaultOrderInfo);

        setCurrentView("browse");
    }

    return (
        <>
            {currentView == "browse" && <BrowseView catalog={catalog} setCatalog={setCatalog} cart={cart} setCart={setCart} setCurrentView={setCurrentView} />}
            {currentView == "cart" && (
                <CartView setCurrentView={setCurrentView} uniqueItems={uniqueItems} itemCounts={itemCounts} totalPrice={totalPrice} setOrderInfoField={setOrderInfoField} />
            )}
            {currentView == "confirmation" && (
                <ConfirmationView setCurrentView={setCurrentView} cart={cart} uniqueItems={uniqueItems} itemCounts={itemCounts} totalPrice={totalPrice} orderInfo={orderInfo} returnFromConfirmToBrowse={returnFromConfirmToBrowse}/>
            )}
        </>
    )
}

export default App
