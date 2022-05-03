import 'express-async-errors';
import express, {
  NextFunction,
  Request,
  Response,
} from 'express';
import routes from '../http/routes/index';
import cors from 'cors';

const app = express();

const originUrl ='http://localhost:3000';

app.use(cors({ origin: originUrl }));

app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof Error) {
    return response
      .json({ message: err.message});
  }

  return response
    .status(500)
    .json({ message: 'Internal server error', status: 500 });
});

export { app };
