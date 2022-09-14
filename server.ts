import express, { Request, Response } from "express"
import cors from "cors"
import { PORT } from "./api/configuration/database"
import bodyParser from "body-parser"
import { connectToPostgres } from "./api/models/index";
import { userRoutes } from "./api/routes/loginRoute";


const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
  };

app.use(cors());
app.use(express.json());

// parse requests of content-type - application/json
app.use(bodyParser.json());


app.use ('/', userRoutes)


app.get('/', (req:Request, res:Response) => {
    console.log('Welcome')
    res.send('oricand')
  });


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });


// verify connection and sync DB
connectToPostgres();