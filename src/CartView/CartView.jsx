import { Navbar } from "react-bootstrap";
import CartViewHeader from "./CartViewHeader.jsx";
import PaymentInfo from "./PaymentInfo.jsx";

function CartView({ cart, setCurrentView }) {

    function returnToBrowseView() {
        setCurrentView("browse");
    }

    const cartItems = cart.map((item) => {
        return (
            <>
            </>
        )
    });

    return (
        <div>
            <CartViewHeader changeView={returnToBrowseView}/>
            <PaymentInfo/>
        </div>
    )
}

export default CartView;
