import JWT from 'jsonwebtoken';
import dotenv from 'dotenv';
import Tuser from '../@types/Tusers';

dotenv.config();

const generateToken = (obj:Tuser) => {
  const generate = JWT.sign({ data: obj }, process.env.JWT_SECRET || 'senha' as string, {
    expiresIn: '30d',
    algorithm: 'HS256',
  });
  return generate;
};

export default generateToken;