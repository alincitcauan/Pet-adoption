import { Request, Response, NextFunction } from 'express';
import { User } from '../models/user.model'
import { secret } from '../configuration/auth.config';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'
import { ForeignKeyConstraintError, ValidationError } from 'sequelize';


class AuthController {
  constructor() { }

  async signup(req: Request, res: Response) {
    try {

      const body = req.body;
      const { first_name, last_name, city, country, zipcode, phone_number, birthdate, email, RoleId } = body;

      const hashPassword = await bcrypt.hash(req.body.password, 10)

      const user = await User.findOne({
        where: {
          email: req.body.email
        }
      })
      if (user) {
        res.status(400).send("User Already Exists")
      } else {

        const user1 = await User.create({
          first_name,
          last_name,
          city,
          country,
          zipcode,
          phone_number,
          birthdate,
          email,
          password: hashPassword,
          RoleId,
        })
        res.send({ message: "Registration Done" })
      }
    } catch (error) {
      // console.log(8777687687687658675765765765765657)

      if (error instanceof ValidationError) {
        res.send('All fields are mandatory')
      }
      else if (error instanceof ForeignKeyConstraintError) {
        res.status(400).send('Role Id does not exist')
      }
      else {
        res.status(400).send("wrong type")
      }
    }
  }


  async signin(req: Request, res: Response) {

    try {
      const user = await User.findOne({
        where: {
          email: req.body.email
        }
      })

      if (!user) {
        console.log(999999999999)
        return res.status(404).send({ message: "User Not found." });
      }
      else {

        const password1 = req.body.password
        const password2 = user.password
        // console.log(password2)
        var passwordCompare = bcrypt.compareSync(
          password1,
          password2
        );

        if (!passwordCompare) {
          return res.status(401).send({
            accessToken: null,
            message: "Invalid Password!"
          });
        }

        // create token
        const config = jwt
        var token = jwt.sign({ id: user.id }, secret, { expiresIn: 86400 /*24 h*/ });
        console.log(token)

        res.status(200).send({
          id: user.id,
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email,
          roleId: user.RoleId,
          accessToken: token
        });
      }
    } catch (error) {
      if (!(req.body.email && req.body.password)) {
        res.status(400).send("Credentials are mandatory")
        // console.log(877768768768765867576576576)
      }
    }
  }
}


export default new AuthController()