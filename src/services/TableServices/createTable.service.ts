import { TableModel, Table } from '../../models';

export async function createTable(tableData: Table) {
  try {
    const newTable = new TableModel(tableData);
    await newTable.save();
    return newTable;
  } catch (error) {
    console.error(error);
    throw new Error('Error al crear las mesas');
  }
}
