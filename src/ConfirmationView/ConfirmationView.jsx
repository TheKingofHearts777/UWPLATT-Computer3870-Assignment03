import { Button } from "react-bootstrap";

function OrderInfo({ orderInfo }) {
    return (
        <div>
            <p>Address: {orderInfo.address} {orderInfo.city}, {orderInfo.state}. {orderInfo.zip}</p>
            <h5 className="mt-4">Contact</h5>
            <p>Name: {orderInfo.fullName}</p>
            <p>Email: {orderInfo.email}</p>
        </div>
    );
}

function ConfirmationView({ cart, uniqueItems, itemCounts, totalPrice, orderInfo, returnFromConfirmToBrowse, shippingCost, taxRate}) {
    // Generated using "Format this how a typical receipt would look" prompt

    function getCartInfo() {
        if (cart && cart.length > 0) {
            const format = (n) => `$${Number(n || 0).toFixed(2)}`;
            const orderNumber = `#${Date.now().toString().slice(-8)}`;
            const now = new Date().toLocaleString();

            const rows = uniqueItems.map(item => {
                const qty = itemCounts[item.id] || 0;
                const unit = Number(item.price) || 0;
                const line = unit * qty;
                return (
                    <tr key={item.id}>
                        <td>{item.name || item.title || item.id}</td>
                        <td className="text-end">{qty}</td>
                        <td className="text-end">{format(unit)}</td>
                        <td className="text-end">{format(line)}</td>
                    </tr>
                );
            });

            const tax = totalPrice * taxRate;

            return (
                <div className="container mt-3 p-3 border rounded bg-white">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                        <div>
                            <h4 className="mb-0">Platteville Store</h4>
                            <small className="text-muted">Thank you for your purchase</small>
                        </div>
                        <div className="text-end">
                            <div><strong>Receipt</strong></div>
                            <div className="text-muted">Order: {orderNumber}</div>
                            <div className="text-muted">{now}</div>
                        </div>
                    </div>

                    <table className="table table-sm">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th className="text-end">Qty</th>
                                <th className="text-end">Unit</th>
                                <th className="text-end">Line</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td />
                                <td />
                                <td className="text-end"><strong>Subtotal</strong></td>
                                <td className="text-end"><strong>{format(totalPrice)}</strong></td>
                            </tr>
                            <tr>
                                <td />
                                <td />
                                <td className="text-end"><strong>Tax</strong></td>
                                <td className="text-end"><strong>{format(tax)}</strong></td>
                            </tr>
                            <tr>
                                <td />
                                <td />
                                <td className="text-end"><strong>Shipping</strong></td>
                                <td className="text-end"><strong>{format(shippingCost)}</strong></td>
                            </tr>
                            <tr>
                                <td />
                                <td />
                                <td className="text-end"><strong>Total</strong></td>
                                <td className="text-end"><strong>{format(totalPrice + shippingCost + tax)}</strong></td>
                            </tr>
                        </tfoot>
                    </table>

                    <hr style={{ border: "none", borderTop: "1px dashed #ccc" }} />

                    <div className="row">
                        <div className="col-md-6">
                            <h5 className="mb-2">Shipping</h5>
                            <OrderInfo orderInfo={orderInfo} />
                        </div>
                        <div className="col-md-6 text-md-end">
                            <h5 className="mb-2">Payment</h5>
                            {/* I developed this method to mask credit card numbers for security */}
                            <p className="mb-1">
                                Card: {"X".repeat(4)}-{"X".repeat(4)}-{"X".repeat(4)}-{(orderInfo?.card || "").slice(12)}
                            </p>
                        </div>
                    </div>
                </div>
            );
        }

        return <p className="text-muted">Your cart is empty.</p>;
    }

    function displayCartContents() {
        return (
            <div className="cart-contents">
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
            <Button variant="success" onClick={returnFromConfirmToBrowse}>Browse</Button>
        </>
    )
}

export default ConfirmationView;
