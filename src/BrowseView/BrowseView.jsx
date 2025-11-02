import { useState, useEffect } from 'react';

import ItemCard from './ItemCard.jsx';
import CardGrid from './CardGrid.jsx';

import BrowseViewHeader from './BrowseViewHeader.jsx';

function BrowseView({ catalog, setCatalog, cart, setCart, setCurrentView }) {
    const [filteredCatalog, setFilteredCatalog] = useState([]);
    const [searchInput, setSearchInput] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const someResponse = await fetch("/products.json");
                const data = await someResponse.json();
                // update State Variable
                setCatalog(data);
                setFilteredCatalog(data);
                console.log(data);
            } catch (error){
                console.log("Error :", error);
            }
        };
        fetchData();
    }, []);

    const addToCart = (element) => {
        setCart([...cart, element]);
    }

    const removeFromCart = (element) => {
        let itemFound = false;

        const updatedCart = cart.filter((cartItem) => {
            if (cartItem.id === element.id && !itemFound) {
                itemFound = true;
                return false;
            }

            return true;
        });

        if (itemFound) {
            setCart(updatedCart);
        }
    };

    function howManyofThis(id) {
        let hmot = cart.filter((cartItem) => cartItem.id === id);
        return hmot.length;
    }

    function updateSearchInput(event) {
        setSearchInput(event.target.value);
    }

    function searchCatalog() {
        // need to fade away cards that are filtered out
        const searchTerm = (searchInput || "").toLowerCase().trim();

        let nextCatalog = [];

        if (searchTerm === "") {
            nextCatalog = catalog;
        } else {
            nextCatalog = catalog.filter(
                e => ((e.title || "").toLowerCase().includes(searchTerm))
            );
        }

        setFilteredCatalog(nextCatalog);
    }

    function changeViewToCartView() {
        setCurrentView("cart");
    }

    const listItems = filteredCatalog.map((el) => (
        <ItemCard
        el={el}
        id={el.id}
        title={el.title}
        price={el.price}
        img={el.image}
        descr={el.description}
        removeFromCart={removeFromCart}
        addToCart={addToCart}
        howManyofThis={howManyofThis}
        />
    ));

    return (
        <div>
            <BrowseViewHeader
            onSearchUpdate={updateSearchInput}
            searchCatalog={searchCatalog}
            changeView={changeViewToCartView}
            cartCount={cart.length}
            />

            <CardGrid
            cards={listItems}
            numCols={3}
            />
        </div>
    )
}

export default BrowseView;
