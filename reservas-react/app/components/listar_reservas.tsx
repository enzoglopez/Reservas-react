"use client";

import { useEffect, useState } from "react";
import CardReserva from "./card_reservas";

type Reserva = {
  id: number;
  nome_cliente: string;
  data_reserva: string;
  horario_reserva: string;
  status_reserva: string;
  imagem_reserva: string;
};

export default function ListaReservas() {
  const [reservas, setReservas] = useState<Reserva[]>([]);

  useEffect(() => {
    async function fetchReservas() {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_ROUTE}/reservas`,
          { method: "GET" }
        );
        const data = await response.json();
        setReservas(data);
      } catch (error) {
        console.error("Erro ao buscar reservas:", error);
      }
    }

    fetchReservas();
  }, []);

  reservas.map((reserva) => (
      return
        <CardReserva
          key={reserva.id}
          cliente={reserva.nome_cliente}
          data={reserva.data_reserva}
          horario={reserva.horario_reserva}
          status={reserva.status_reserva}
          imagem={reserva.imagem_reserva}
        />
      
  ));
}
