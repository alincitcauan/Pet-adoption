import { Request , Response, NextFunction} from 'express'
import jwt, {JsonWebTokenError, JwtPayload} from 'jsonwebtoken'
import { secret } from '../configuration/auth.config';

const config = process.env;

 const verifyToken = (req:Request, res:Response , next:NextFunction) => {
  const token = req.header('Authorization');

    console.log(token, 11111111111)
  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  // console.log(token, 2222222222) 
  try {
    
    var decoded = jwt.verify(token, secret);
    if (decoded){
    res.send('authentication done')}

  } catch (error) {
    if (error){
      console.log(error)
      res.send('You have to provide your credentials')
    }
    console.log(3333333333333)
    if (!decoded)
    return res.status(401).send("Invalid Token");
  }
  return next();
}

export default verifyToken