import 'express-async-errors'; // is an Express.js middleware that helps handle errors that occur within asynchronous functions
import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
import morgan from 'morgan';
import mongoose from 'mongoose';

// routers
import jobRouter from './routers/jobRouter.js';

// middleware
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js';

// makes sure morgan only runs in development not in production
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// shows helpful console logs
app.use(morgan('dev'));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/', (req, res) => {
  console.log(req);

  res.json({ message: 'Data received', data: req.body });
});

app.use('/api/v1/jobs', jobRouter);

// NOT FOUND MIDDLEWARE
app.use('*', (req, res) => {
  res.status(404).json({ msg: 'not found' });
});

app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5100;
try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`server running on PORT ${port}....`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
