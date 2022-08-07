import Tuser from '../@types/Tusers';
import models from '../models/index.models';
import CustomError from '../helpers/customError';
import httpStatusCodes from '../helpers/httpStatusCode';
import generateToken from '../helpers/jwtToken';

const createNewUser = async (obj: Tuser) => {
  const { username } = obj;
  const validateNewUser = await models.getUserByUsername(username);
  if (validateNewUser.length !== 0) {
    throw new CustomError(httpStatusCodes.CONFLICT, 'O usuário já existe');
  }
  await models.createNewUser(obj);
  const token = generateToken(obj);
  return token;
};

export default createNewUser;
