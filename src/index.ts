import { app } from './app';
import { PORT } from './config';
import { connectDB } from './config';
import './config/config';

connectDB();
app.listen(PORT);
console.log(`Server listening port ${PORT}`);
