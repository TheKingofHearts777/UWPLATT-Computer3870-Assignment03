import { Button, Navbar, Table } from "react-bootstrap";
import CartViewHeader from "./CartViewHeader.jsx";
import PaymentInfo from "./PaymentInfo.jsx";

function CartView({ cart, setCurrentView, totalPrice, setTotalPrice }) {

    function returnToBrowseView() {
        setCurrentView("browse");
    }

    function changeViewToOrderView() {
        setCurrentView("confirmation");
    }

    const uniqueItems = cart.filter(
        (item, index, self) => self.findIndex(i => i.id === item.id) === index
    );

    let newTotal = 0;
    const countsMap = {};

    uniqueItems.forEach(item => {
        const itemCount = cart.filter(i => i.id === item.id).length;
        countsMap[item.id] = itemCount;
        newTotal += item.price * itemCount;
    });

    setTotalPrice(newTotal);

    const tableEntries = uniqueItems.map((item) => {
        return (
            <tr>
                <td><img alt={item.title} src={item.image} style={{ width: "200px", height: "200px", display: "block", margin: "0 auto" }}></img> {item.title}</td>
                <td>{countsMap[item.id]}</td>
                <td>${parseFloat(item.price).toFixed(2)}</td>
                <td>${parseFloat(item.price * countsMap[item.id]).toFixed(2)}</td>
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
            <PaymentInfo />
            <Button className="btn" variant="success" onClick={changeViewToOrderView}>Order</Button>
        </div>
    )
}

export default CartView;
