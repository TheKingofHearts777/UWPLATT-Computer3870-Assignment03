import { Badge } from 'react-bootstrap';

export default function ConfirmItemCard({ item, quantity }) {
    return (
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
                                <Badge pill bg="primary">
                                    Quantity: {quantity}
                                </Badge>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
