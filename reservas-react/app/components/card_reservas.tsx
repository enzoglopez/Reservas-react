import Link from "next/link";
import { cardProps } from "../types";

export default function CardReserva({
  cliente,
  data,
  horario,
  status,
  imagem,
}: cardProps) {
  return (
    <div className="bg-white border-1 border-gray-200 size-1/4 absolute rounded-xl flex gap-x-8 overflow-hidden p-3 shadow-lg">
      <div className="w-1/3 h-full rounded-lg overflow-hidden">
        <img src={imagem} className="w-full h-full" />
      </div>
      <div className="flex flex-col w-1/2 gap-y-1 h-full justify-center">
        <h1 className="text-xl font-bold">{cliente}</h1>
        <div className="flex flex-col w-full">
          <span>Data: {data}</span>
          <span>Horario: {horario}</span>
        </div>
        <span>Status: {status}</span>
        <Link
          className="w-full h-8 flex relative top-9 items-center justify-center rounded-md text-white font-semibold bg-sky-400"
          href={"#"}
        >
          Editar
        </Link>
      </div>
    </div>
  );
}
