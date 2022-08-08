import { RowDataPacket } from 'mysql2';
import connection from './connection';

const getAllOrders = async () => {
  const queryOrder = 'SELECT * FROM Trybesmith.Orders';
  const queryIds = 'SELECT * FROM Trybesmith.Products';
  
  const [orders] = await connection.execute<RowDataPacket[]>(queryOrder);
  const [products] = await connection.execute<RowDataPacket[]>(queryIds);
  return { orders, products };
};

export default getAllOrders;