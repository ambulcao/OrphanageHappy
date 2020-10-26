import express from 'express';
import { getRepository } from 'typeorm';

import './database/connection';

const app = express();

app.use(express.json());

app.post('/orphanages', (resquest, response) => {
  const {
    name,
    latitude,
    longitude,
    about,
    instructions,
    opening_hours,
    open_on_weekends
  } = resquest.body;

  return response.json({ message: 'Hello World' });
});

app.listen(3333);