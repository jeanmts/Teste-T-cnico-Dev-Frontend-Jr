import Card from "@/src/components/Card";
import cars from "@/src/utils/database";

export default function Home() {
  return (
    <>
      <table className="min-w-full divide-y divide-gray-200 flex flex-col flex h-screen justify-center items-center ">
        <thead className=" bg-gray-50 flex justify-center gap-56 ">
          <tr>
            <th className=" scope=px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CAR</th>
            <th className=" scope=px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">NEXT RESERVATION</th>
            <th className=" scope=px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">STATUS</th>
            <th className=" scope=px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">RATING</th>
            <th className=" scope=px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ACTIONS</th>
          </tr>
        </thead>
        <tbody className= "bg-white divide-y divide-gray-200">
          {cars.map((car) =>
            <tr key={car.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <Card
                  model={car.name}
                  photo={car.photo}
                  year={car.year}
                  nextReservation={car.nextReservation}
                  status={car.status}
                  rating={car.rating}
                />
              </td>
            </tr>
          )
          }
        </tbody>
      </table>
    </>
  );
}
