import { TableModel, Table } from '../../models';

export async function getTable(): Promise<Table | null> {
  try {
    const orders = await TableModel.findOne({});
    return orders;
  } catch (error) {
    console.error(error);
    return null;
  }
}
