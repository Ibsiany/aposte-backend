import 'reflect-metadata';
import './shared/infra/http/container';
import { app } from './shared/infra/http/app';
import { createConnection } from 'typeorm';


createConnection().then(() => {
  app.listen(3333, () => {
    console.log('Server started on port 3333.');
  });
});
