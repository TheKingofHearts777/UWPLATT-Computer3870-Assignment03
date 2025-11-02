import ConfirmItemCard from './ConfirmItemCard.jsx';

function ConfirmationView({ cart, uniqueItems, itemCounts, totalPrice }) {

    function getCartInfo() {
        if (cart && cart.length > 0) {
            return (
                <div className="container mt-3">
                    <div className="row">
                        {uniqueItems.map(item => (
                            <ConfirmItemCard
                                key={item.id}
                                item={item}
                                quantity={itemCounts[item.id]}
                            />
                        ))}
                    </div>
                    <div>
                        <h4 className="mt-4">Total Items: {cart.length}</h4>
                        <h4 className="mt-4">Total Price: ${parseFloat(totalPrice).toFixed(2)}</h4>
                    </div>
                    <hr style={{ border: "none", borderTop: "3px dashed #000000FF" }} />
                    <div>
                        <h2 className="mt-4">Order Info:</h2>
                        <h4 className="mt-2">Receipient Address:</h4>
                        <p>{}</p>
                        <h4 className="mt-2">Card Info:</h4>
                        <p>{}</p>
                        <h2 className="mt-4">Contact Info:</h2> /* Add Contact Info Here */
                        <p>{}</p>
                        <p>{}</p>
                    </div>
                </div>
            );
        }

        return <p className="text-muted">Your cart is empty.</p>;
    }

    function displayCartContents() {
        return (
            <div className="cart-contents">
                <h2>Your Cart Items:</h2>
                {getCartInfo()}
            </div>
        );
    }

    return (
        <>
            <div className="confirmation-view">
                <h1>Thank you for your submission!</h1>
                <p>Your order has been successfully submitted.</p>
            </div>
            {displayCartContents()}
        </>
    )
}

export default ConfirmationView;
