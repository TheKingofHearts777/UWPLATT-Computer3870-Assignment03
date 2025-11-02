import { useNavigate } from 'react-router-dom';

function ConfirmationView({ cart, totalPrice }) {

    const itemMap = new Map();

    function countItems() {
        if (cart && cart.length > 0) {
            cart.forEach(item => {
                if (itemMap.has(item.id)) {
                    itemMap.set(item.id, itemMap.get(item.id) + 1);
                } else {
                    itemMap.set(item.id, 1);
                }
            });
        }
    }

    function getCartInfo() {
        countItems();
        if (cart && cart.length > 0) {
            const uniqueItems = new Map();
            cart.forEach(item => {
                if (!uniqueItems.has(item.id)) uniqueItems.set(item.id, item);
            });

            return (
                <div className="container mt-3">
                    <div className="row">
                        {[...uniqueItems.values()].map(item => (
                            <div key={item.id} className="col-12 col-md-6 mb-3">
                                <div className="card h-100 shadow-sm">
                                    <div className="row g-0">
                                        <div className="col-4">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="img-fluid rounded-start"
                                            />
                                        </div>
                                        <div className="col-8">
                                            <div className="card-body">
                                                <h5 className="card-title">{item.title}</h5>
                                                {item.description && (
                                                    <p className="card-text text-muted">{item.description}</p>
                                                )}
                                                <div className="mt-2">
                                                    <span className="badge bg-primary">
                                                        Quantity: {itemMap.get(item.id) || 0}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div>
                        <h4 className="mt-4">Total Items: {cart.length}</h4>
                        <h4 className="mt-4">Total Price: ${totalPrice}</h4>
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
