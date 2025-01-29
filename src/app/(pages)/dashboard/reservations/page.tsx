import ReservationForm from "./ReservationForm";

export default function ReservationsPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6 flex justify-center">Make a Reservation</h1>
      <ReservationForm />
    </div>
  )
}
