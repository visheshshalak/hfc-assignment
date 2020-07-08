import Koa from 'koa';
import Router from '@koa/router';
import koaCors from '@koa/cors';

const app = new Koa();
const router = new Router();

app.use(
  koaCors({
    origin: process.env.WEB_APP_URL,
  }),
);

router.get('/health-check', (ctx, next) => {
  ctx.status = 200;
  ctx.body = {
    enviornment: 'dev',
    running: true,
  };

  next();
});

app.use(router.routes());

app.listen(process.env.API_SERVER_PORT || 4000, () => {
  console.log(`Server ready at http://localhost:${process.env.API_SERVER_PORT || 4000}`);
  console.log(`Health Check at http://localhost:${process.env.API_SERVER_PORT || 4000}/health-check`);
});
