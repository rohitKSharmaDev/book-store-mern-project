import express from "express";
import { PORT, mongoDBUrl } from "./config.js";
import mongoose from "mongoose";
import cors from 'cors';

import booksRoute from './routes/booksRoute.js';

const app = express();

app.use(express.json());

app.use(cors());

// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type']
//   })
// );


app.get('/', (request, response) => {
  console.log(request);
  return response.status(234).send('Welcome to the MERN Stack Tutorial');
});

app.use('/books', booksRoute);

mongoose
.connect(mongoDBUrl)
.then(()=> {
  console.log("App connected to database");

  app.listen(PORT, () => {
    console.log(`App is listening to ${PORT}`);
  });
})
.catch((error) => {
  console.log(error);
});