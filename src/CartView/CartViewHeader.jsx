import { Navbar, Container, Form, Button, FormControl } from "react-bootstrap";

export default function CartViewHeader({ changeView }) {
    return (
        <Navbar bg="light" expand="md" className="mb-3 shadow-sm">
            <Container>
                <Button variant="secondary" onClick={changeView}>
                    Return
                </Button>
            </Container>
        </Navbar>
    );
}
