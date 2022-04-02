let express = require("express");
let Router = express.Router();
let Request = require("./network");

// NetWork
async function NetWork(body) {
  try {
    let result = await Request(body.api, body.config);
    this.status(200).json({
      status: 200,
      msg: "success",
      data: result
    });
  } catch (err) {
    this.status(500).json({
      status: 500,
      msg: "danger",
    });
  }
}

// UP池
Router.post("/query_301", (req, res) => {
  NetWork.call(res, req.body);
});

// 武器池
Router.post("/query_302", (req, res) => {
  NetWork.call(res, req.body);
});

// 常驻池
Router.post("/query_200", (req, res) => {
  NetWork.call(res, req.body);
});

module.exports = Router;
