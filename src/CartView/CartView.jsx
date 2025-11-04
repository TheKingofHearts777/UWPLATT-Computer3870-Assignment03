import { Button, Navbar, Table } from "react-bootstrap";
import CartViewHeader from "./CartViewHeader.jsx";
import PaymentInfo from "./PaymentInfo.jsx";

function CartView({ setCurrentView, uniqueItems, itemCounts, totalPrice, setOrderInfoField, shippingCost, taxRate }) {
    function returnToBrowseView() {
        setCurrentView("browse");
    }

    function changeViewToOrderView() {
        setCurrentView("confirmation");
    }

    const format = (n) => `$${Number(n || 0).toFixed(2)}`;

    const tax = totalPrice * taxRate;

    const tableEntries = uniqueItems.map((item) => {
        return (
            <tr key={item.id}>
                <td>
                    <img
                        alt={item.title}
                        src={item.image}
                        style={{ width: "200px", height: "200px", display: "block", margin: "0 auto" }}
                    />
                    {item.title}
                </td>
                <td>{itemCounts[item.id]}</td>
                <td>${parseFloat(item.price).toFixed(2)}</td>
                <td>${parseFloat(item.price * itemCounts[item.id]).toFixed(2)}</td>
            </tr>
        );
    })

    const cartTable = (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th><strong>Item</strong></th>
                    <th><strong>Quantity</strong></th>
                    <th><strong>Price / Unit</strong></th>
                    <th><strong>Total Price</strong></th>
                </tr>
            </thead>
            <tbody>
                {tableEntries}
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
        </Table>
    );

    return (
        <div>
            <CartViewHeader changeView={returnToBrowseView} />
            {cartTable}
            <PaymentInfo setOrderInfoField={setOrderInfoField} changeViewToOrderView={changeViewToOrderView} />
        </div>
    )
}

export default CartView;
