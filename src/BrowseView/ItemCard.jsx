import { ButtonGroup, Button } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

export default function ItemCard({el, id, title, price, img, descr, removeFromCart, addToCart, howManyofThis}) {
    return (
        <div className="card" key={id}>
            <img alt={title} src={img} style={{ width: "200px", height: "200px", display: "block", margin: "0 auto" }}></img>

            <div className="container d-flex align-items-center gap-2">
                <Badge pill bg="success">${parseFloat(price).toFixed(2)}</Badge>
                <strong>{title}</strong>
            </div>

            <p>{descr}</p>

            <hr/>
            
            <div className="container d-flex align-items-center gap-2r">
                <Form.Control
                type="text"
                placeholder={howManyofThis(id)}
                disabled
                readOnly
                />

                <ButtonGroup>
                    <Button className="btn btn-outline-success" variant="light" onClick={() => addToCart(el)}>+</Button>
                    <Button className="btn btn-outline-secondary" variant="light" onClick={() => removeFromCart(el)}>-</Button>
                </ButtonGroup>
            </div>
        </div>
    )
}
