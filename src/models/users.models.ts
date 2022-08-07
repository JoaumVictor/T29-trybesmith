import { ResultSetHeader, RowDataPacket } from 'mysql2';
import Tuser from '../@types/Tusers';
import connection from './connection';

async function createNewUser(obj: Tuser) {
  const { username, classe, level, password } = obj;
  const query = `INSERT INTO Trybesmith.Users 
    (username, classe, level, password) VALUES (?, ?, ?, ?)`;
  await connection.execute<ResultSetHeader>(query, [username, classe, level, password]);
}

const getUserByUsername = async (username: string) => {
  const query = 'SELECT * FROM Trybesmith.Users WHERE username = ?';
  const [result] = await connection.execute<RowDataPacket[]>(query, [username]);
  return result;
};

export { createNewUser, getUserByUsername };
