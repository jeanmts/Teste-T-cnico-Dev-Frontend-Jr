import cars from "@/src/utils/database";
import Card from '@/src/components/Card'
import "@/app/globals.css"

export default function Home() {
  return (
    <>
      <div className="grid h-screen place-items-center">
        <table>
          <thead className=" bg-gray-50 ">
            <tr>
              <th className=" px-6 py-4 whitespace-nowrap">CAR</th>
              <th className=" px-6 py-4 whitespace-nowrap">NEXT RESERVATION</th>
              <th className=" px-6 py-4 whitespace-nowrap">STATUS</th>
              <th className=" px-6 py-4 whitespace-nowrap">RATING</th>
              <th className=" px-6 py-4 whitespace-nowrap">ACTIONS</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 ">
            {cars.map((car) => {
              return (<>
                <Card
                    key={car.id}
                    car={car.photo}
                    model={car.name}
                    year={car.year}
                    nextReservation={car.nextReservation}
                    status={car.status}
                    rating={car.rating}
                  />
              </>)
            }) }
          </tbody>
        </table>
      </div>

    </>
  );
}
