import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

export const app = express();

app.use(morgan('dev'));
app.use(cors());

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
// app.use(router)

