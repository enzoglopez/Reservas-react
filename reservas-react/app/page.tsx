import ListaReservas from "./components/listar_reservas";

export default function Home() {
  return (
    <div className="bg-gray-200 w-full h-screen p-5">
      <div className="bg-white rounded-2xl w-full h-full p-5 flex flex-col items-center">
        <h1 className="text-2xl font-bold">Reservas cadastradas</h1>
        <div className="flex w-full h-full">
          <ListaReservas />
        </div>
      </div>
    </div>
  );
}
