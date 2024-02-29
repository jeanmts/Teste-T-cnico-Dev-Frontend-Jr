import "@/app/globals.css"
import Car from '../Car'


export default function Card({ car, nextReservation, status, rating, model, year }) {
    return (
        <>
            <tr>
                <td className=" px-6 py-4 whitespace-nowrap" >
                    <Car
                        photo={car}
                        model={model}
                        year={year}
                    />
                </td>
                <td className=" px-6 py-4 whitespace-nowrap" >{nextReservation}</td>
                <td className=" px-6 py-4 whitespace-nowrap">{status ? "Avaliable" : "Unavailable"}</td>
                <td className=" px-6 py-4 whitespace-nowrap">{rating}</td>
                <td className=" px-6 py-4 whitespace-nowrap pointer-events-none" >...</td>
            </tr>
        </>
    )
}