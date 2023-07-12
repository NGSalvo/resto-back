import { app } from './app';
import { PORT } from './config';
import { connectDB } from './config';
import './config/config';

const a = async () => {
  const res4 = await fetch('https://api.ipify.org?format=json');
  const { ip: ipv4 } = await res4.json();
  console.log(`Ipv4: ${ipv4}`);
};
a();
connectDB();
app.listen(PORT);
console.log(`Server listening port ${PORT}`);
