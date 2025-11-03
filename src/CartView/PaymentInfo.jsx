import { Form } from "react-bootstrap";

const US_STATES = [
    { code: "AL", name: "Alabama" },
    { code: "AK", name: "Alaska" },
    { code: "AZ", name: "Arizona" },
    { code: "AR", name: "Arkansas" },
    { code: "CA", name: "California" },
    { code: "CO", name: "Colorado" },
    { code: "CT", name: "Connecticut" },
    { code: "DE", name: "Delaware" },
    { code: "FL", name: "Florida" },
    { code: "GA", name: "Georgia" },
    { code: "HI", name: "Hawaii" },
    { code: "ID", name: "Idaho" },
    { code: "IL", name: "Illinois" },
    { code: "IN", name: "Indiana" },
    { code: "IA", name: "Iowa" },
    { code: "KS", name: "Kansas" },
    { code: "KY", name: "Kentucky" },
    { code: "LA", name: "Louisiana" },
    { code: "ME", name: "Maine" },
    { code: "MD", name: "Maryland" },
    { code: "MA", name: "Massachusetts" },
    { code: "MI", name: "Michigan" },
    { code: "MN", name: "Minnesota" },
    { code: "MS", name: "Mississippi" },
    { code: "MO", name: "Missouri" },
    { code: "MT", name: "Montana" },
    { code: "NE", name: "Nebraska" },
    { code: "NV", name: "Nevada" },
    { code: "NH", name: "New Hampshire" },
    { code: "NJ", name: "New Jersey" },
    { code: "NM", name: "New Mexico" },
    { code: "NY", name: "New York" },
    { code: "NC", name: "North Carolina" },
    { code: "ND", name: "North Dakota" },
    { code: "OH", name: "Ohio" },
    { code: "OK", name: "Oklahoma" },
    { code: "OR", name: "Oregon" },
    { code: "PA", name: "Pennsylvania" },
    { code: "RI", name: "Rhode Island" },
    { code: "SC", name: "South Carolina" },
    { code: "SD", name: "South Dakota" },
    { code: "TN", name: "Tennessee" },
    { code: "TX", name: "Texas" },
    { code: "UT", name: "Utah" },
    { code: "VT", name: "Vermont" },
    { code: "VA", name: "Virginia" },
    { code: "WA", name: "Washington" },
    { code: "WV", name: "West Virginia" },
    { code: "WI", name: "Wisconsin" },
    { code: "WY", name: "Wyoming" }
];

export default function PaymentInfo({ setOrderInfoField }) {
    return (
        <div className="container">
            <strong>Payment Information</strong>

            <Form className="container d-flex me-auto gap-2">
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                        type="text"
                        onChange={(e) => setOrderInfoField("fullName", e.target.value.trim())}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        onChange={(e) => setOrderInfoField("email", e.target.value.trim().toLowerCase())}
                    />
                </Form.Group>
            </Form>

            <Form>
                <Form.Group className="mb-3" controlId="card">
                    <Form.Label>Card</Form.Label>
                    <Form.Control
                        placeholder="XXXX-XXXX-XXXX-XXXX"
                        onChange={(e) => setOrderInfoField("card", e.target.value.trim())}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="address">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        placeholder="1234 Main St"
                        onChange={(e) => setOrderInfoField("address", e.target.value.trim())}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="address2">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control
                        placeholder="Apartment, studio, or floor"
                        onChange={(e) => setOrderInfoField("address2", e.target.value.trim())}
                    />
                </Form.Group>
            </Form>

            <Form className="container d-flex me-auto">
                <Form.Group className="mb-3" controlId="city">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                        onChange={(e) => setOrderInfoField("city", e.target.value.trim())}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="state">
                    <Form.Label>State</Form.Label>
                    <Form.Select onChange={(e) => setOrderInfoField("state", e.target.value)}>
                        <option value="">Select state</option>
                        {US_STATES.map((s) => (
                            <option key={s.code} value={s.code}>
                                {s.code} - {s.name}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="zip">
                    <Form.Label>ZIP</Form.Label>
                    <Form.Control
                        type="text"
                        inputMode="numeric"
                        maxLength={5}
                        onKeyDown={(e) => {
                            // Allow: digits, backspace, delete, arrows, tab
                            if (
                                !/[0-9]/.test(e.key) &&
                                !["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"].includes(e.key)
                            ) {
                                e.preventDefault();
                            }
                        }}
                        onChange={(e) => {
                            const value = e.target.value.replace(/\D/g, "").slice(0, 5);
                            setOrderInfoField("zip", value)
                        }}
                    />
                </Form.Group>
            </Form>
        </div>
    )
}
