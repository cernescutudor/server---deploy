


import express from 'express';
import cors from 'cors';
import Routes from './routes/Routes.js';
import {registerUser, loginUser} from './controller/UserController.js';

const app = express();
const port = 80;


app.use(cors({exposedHeaders : ['Authorization']}));
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', Routes);

app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running on port ${port}`);
})



export default app;

