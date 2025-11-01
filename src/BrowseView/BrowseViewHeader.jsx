import { Navbar, Container, Form, Button, FormControl } from "react-bootstrap";

export default function BrowseViewHeader({ onSearchUpdate, searchCatalog, changeView, cartCount }) {
    return (
        <Navbar bg="light" expand="md" className="mb-3 shadow-sm">
            <Container>
                <Form className="d-flex me-auto" onSubmit={(e) => {e.preventDefault()}}>
                    <FormControl
                        type="search"
                        placeholder="Search"
                        onChange={onSearchUpdate}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                e.preventDefault();
                                searchCatalog();
                            }
                        }}
                        className="me-2"
                    />

                    <Button variant="success" className="d-flex me-auto" onClick={searchCatalog}>
                        Search
                    </Button>
                </Form>


                <Button variant="primary" onClick={cartCount > 0 ? changeView : null}>
                    Checkout {cartCount > 0 && `(${cartCount})`}
                </Button>
            </Container>
        </Navbar>
    );
}
