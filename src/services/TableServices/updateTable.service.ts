import { Table, TableModel } from '../../models';

export async function updateTable(table: Table): Promise<Table | null> {
  try {
    await TableModel.findOneAndUpdate(table);
    const updatedTable = TableModel.findOne({});
    return updatedTable;
  } catch (error) {
    console.error(error);
    return null;
  }
}
