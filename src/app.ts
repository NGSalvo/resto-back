import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { router as DishRouter } from './routes/DishRoutes/index';
import { router as UserRouter } from './routes/UsersRoutes/index';
import { router as OrderRouter } from './routes/OrderRoutes/index'
export const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(DishRouter);
app.use(UserRouter);
app.use(OrderRouter);
//EJEMPLO DE POSTEO A LA BASE DE DATOS

// import { UserModel as User } from './models';
// import { Router } from 'express';
// import { schemaValidation } from './middlewares';
// import { createUserSchema } from './schemas';
// const router = Router()

// app.use(express.json())

// router.post('/',schemaValidation(createUserSchema),async(req:Request,res:Response)=>{

//     async function executeQuery() {
//         try {

//             const user = new User(req.body)

//             // await user.save()
//             console.log(user)
//             return user
//         } catch (error) {
//             throw error
//         }
//     }
//     try {

//         const user = await executeQuery()

//         res.send(user)
//     } catch (error) {
//         console.log(error)
//     }

// })
