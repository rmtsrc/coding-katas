const Koa = require('koa');
const Router = require('@koa/router');
const cors = require('@koa/cors');

const transactions = require('./data/transactions');
const retailers = require('./data/retailers');
const users = require('./data/users');

const app = new Koa();
const router = new Router();

const randomDelay = async (minWait = 0, maxWait = 1000) =>
  new Promise(resolve => setTimeout(resolve, Math.floor(Math.random() * maxWait) + minWait));

router.get('/transactions', async ctx => {
  await randomDelay();
  ctx.body = transactions;
});

router.get('/retailers/:id', async ctx => {
  await randomDelay(4000, 6000);
  if (retailers.has(ctx.params.id)) {
    ctx.body = retailers.get(ctx.params.id);
  } else {
    ctx.status = 404;
  }
});

router.get('/users/:id', async ctx => {
  await randomDelay(5000, 6000);
  if (users.has(ctx.params.id)) {
    ctx.body = users.get(ctx.params.id);
  } else {
    ctx.status = 404;
  }
});

app
  .use(cors())
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(3001);
