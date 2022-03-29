let express = require("express");
let app = express();
let cors = require("cors");
let timeout = require("connect-timeout");
let api = require("./api");

// 配置超时时间
app.use(timeout("20s"));

// 配置 POST
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 配置跨域
app.use(cors());

// 使用路由
app.use(api);

// 监听 8080 端口
app.listen(8080, () => {
  console.log("服务已启动!");
});
