require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { errors } = require('celebrate');
const routes = require('./routes/index');

const { requestLogger, errorLogger } = require('./middlewares/logger');

const { PORT = 4000, MONGO_URL } = process.env;
const app = express();
const errorHandler = require('./middlewares/error');

const InternalServerError = require('./errors/internal-server-err');

app.use(cookieParser());
app.use(express.json());

app.use(
  cors({
    origin: '*',
    credentials: true,
  }),
);

app.use(requestLogger);

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

app.use(routes);

async function main(res, next) {
  try {
    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: false,
    });
    await app.listen(PORT);
    console.log(`Сервер запущен на ${PORT} порту`);
    return;
  } catch (err) {
    next(new InternalServerError('Внутренняя ошибка сервера'));
  }
}

main();

app.use(errorLogger);
app.use(errors());
app.use(errorHandler);
