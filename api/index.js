let express = require("express");
let Router = express.Router();
let { decoding } = require("./utils");
let Request = require("./network");

// NetWork
async function NetWork(api, type) {
  try {
    let data = decoding(api);
    let result = await Request(data);
    if (result instanceof Array) {
      this.status(200).json({
        code: 200,
        msg: "success",
        type,
        data: result,
      });
    }
  } catch (err) {
    this.status(500).json({
      code: 500,
      type: "danger",
    });
  }
}

// UP池
Router.post("/query_301", async (req, res) => {
  NetWork.call(res, req.body.api, "up");
});

// 武器池
Router.post("/query_302", async (req, res) => {
  NetWork.call(res, req.body.api, "weapon");
});

// 常驻池
Router.post("/query_200", async (req, res) => {
  NetWork.call(res, req.body.api, "forever");
});

module.exports = Router;
