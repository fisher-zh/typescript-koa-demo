import * as Koa from 'koa';
import { config } from './config';
import router from './router';

const app = new Koa();

app.use(router.routes());

app.listen(config.port);
console.log(`app is started at port ${config.port}`);
