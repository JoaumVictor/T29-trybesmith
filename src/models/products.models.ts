import { ResultSetHeader } from 'mysql2';
import { TpostProducts } from '../@types/Tproducts';
import connection from '../helpers/connection';

async function postProducts(obj: TpostProducts) {
  const { name, amount } = obj;
  const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
  const [response] = await connection.execute<ResultSetHeader>(query, [name, amount]);
  return { name, amount, id: response.insertId };
}

async function getProducts() {
  const query = 'SELECT * FROM Trybesmith.Products';
  const [response] = await connection.execute<ResultSetHeader>(query);
  return response;
}

export { postProducts, getProducts };
