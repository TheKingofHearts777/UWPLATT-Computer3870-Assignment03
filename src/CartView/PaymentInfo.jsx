import { Form } from "react-bootstrap";

export default function PaymentInfo() {
    return (
        <div className="container">
            <strong>Payment Information</strong>

            <Form className="container d-flex me-auto gap-2">
                <Form.Group className="mb-3" controlId="payment.name">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="payment.email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" />
                </Form.Group>
            </Form>

            <Form>
                <Form.Group className="mb-3" controlId="payment.card">
                    <Form.Label>Card</Form.Label>
                    <Form.Control placeholder="XXXX-XXXX-XXXX-XXXX"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="payment.address">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="payment.address2">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor"/>
                </Form.Group>
            </Form>

            <Form className="container d-flex me-auto">
                <Form.Group className="mb-3" controlId="payment.location.city">
                    <Form.Label>City</Form.Label>
                    <Form.Control/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="payment.location.state">
                    <Form.Label>State</Form.Label>
                    <Form.Control placeholder="IL, WI"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="payment.location.zip">
                    <Form.Label>ZIP</Form.Label>
                    <Form.Control type="number"/>
                </Form.Group>
            </Form>
        </div>
    )
}
