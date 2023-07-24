import { Request, Response } from 'express';
import {
  getOrdersByStatusAndDate,
  STATES,
} from '../../services/OrderServices/filterOrder';

function isValidStatus(status: string): status is STATES {
  return Object.values(STATES).includes(status as STATES);
}

export async function getFilteredOrders(req: Request, res: Response) {
  try {
    const { status, startDate, endDate } = req.query;

    if (!status || typeof status !== 'string' || !isValidStatus(status)) {
      return res.status(400).send({ message: 'Estado no válido' });
    }

    if (
      !startDate ||
      !endDate ||
      typeof startDate !== 'string' ||
      typeof endDate !== 'string'
    ) {
      return res.status(400).send({ message: 'Fechas no válidas' });
    }

    const statusUpperCase = status.toUpperCase() as keyof typeof STATES;
    const parsedStartDate = new Date(startDate);
    const parsedEndDate = new Date(endDate);

    // Llamar al servicio para obtener las órdenes filtradas por estado y fecha
    const orders = await getOrdersByStatusAndDate(
      STATES[statusUpperCase],
      parsedStartDate,
      parsedEndDate,
    );

    return res.status(200).send(orders);
  } catch (error) {
    console.error('Error al obtener las órdenes:', error);
    return res.status(500).send({ message: 'Error interno del servidor' });
  }
}
