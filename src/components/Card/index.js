import Car from '../Car'


export default function Card({ car, nextReservation, status, rating, model, year }) {
    return (
        <>
            <div className="flex gap-52 justify-center items-center">
                <Car
                    photo={car}
                    model={model}
                    year={year}
                />
                <strong>{nextReservation}</strong>
                <strong>{status ? "Avaliable" : "Unavailable"}</strong>
                <strong>{rating}</strong>
                <span>...</span>
            </div>
        </>
    )
}