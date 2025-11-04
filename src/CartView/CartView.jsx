import { Button, Navbar, Table } from "react-bootstrap";
import CartViewHeader from "./CartViewHeader.jsx";
import PaymentInfo from "./PaymentInfo.jsx";

function CartView({ setCurrentView, uniqueItems, itemCounts, totalPrice, setOrderInfoField }) {
    function returnToBrowseView() {
        setCurrentView("browse");
    }

    function changeViewToOrderView() {
        setCurrentView("confirmation");
    }

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
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>${parseFloat(totalPrice).toFixed(2)}</td>
                </tr>
            </tbody>
        </Table>
    );

    return (
        <div>
            <CartViewHeader changeView={returnToBrowseView} />
            {cartTable}
            <PaymentInfo setOrderInfoField={setOrderInfoField} changeViewToOrderView={changeViewToOrderView}/>
        </div>
    )
}

export default CartView;
