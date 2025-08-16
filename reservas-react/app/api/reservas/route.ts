import db from "@/app/api/db";

export async function GET() {
  try {
    const [rows] = await db.query<any>(
      "SELECT r.id_reserva, u.nome_cliente, DATE_FORMAT(r.data_reserva, '%m/%d/%Y'), r.horario_reserva, r.status_reserva, r.imagem_reserva FROM reservar r LEFT JOIN usuarios u ON u.id = r.id_cliente"
    );

    if (rows.length === 0) {
      return new Response(
        JSON.stringify({ erro: "Nenhum reservas encontradas" })
      );
    }

    return new Response(JSON.stringify(rows));
  } catch (error) {
    return new Response(JSON.stringify({ erro: error }));
  }
}
