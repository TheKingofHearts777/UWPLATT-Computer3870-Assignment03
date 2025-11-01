
export default function CardGrid({cards, numCols}) {
    const cardElements = cards.map((card) => {
        return (
            <div className="col" key={card.props.id}>{card}</div>
        )
    });

    return (
        <div className="container">
            <div className={`row row-cols-${numCols}`}>
                {cardElements}
            </div>
        </div>
    )
}
