const Koa = require('koa')
const app = new Koa()
var cors = require('koa2-cors');
const bodyParser = require('koa-bodyparser');
// const handleErrors = require('./middleware');

// 错误处理中间件，处理视图函数中用throw抛出的异常
// app.use(handleErrors());
app.use(cors());
app.use(bodyParser());

// 路由配置
const Router = require('@koa/router');
const router = new Router({ prefix: '/api/v1' });

router.get("/", async (ctx) => { ctx.body = "hello world" });


// 注册路由
app.use(router.routes()).use(router.allowedMethods());
// 启动服务器
app.listen(3000, () => {
    console.log('server is starting at port 3000')
});
