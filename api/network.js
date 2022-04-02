const axios = require("axios");
let { handleHref } = require("./utils");

module.exports = async function Request(api, config) {
  let page = parseInt(config.page) || 1;  // 当前页数, 默认为1
  let endID = config.endID || "0";        // 最后一项数据ID, 默认为0
  let bool = true;    // 结束循环
  let size = 20;      // 查询长度
  let result = [];    // 查询结果
  let count = 5;      // 查询次数限制
  let query = true;   // 是否继续查询

  while (bool) {
    let handleAPI = handleHref(api, page, endID, size);  // 处理请求链接
    let { data } = await axios.get(handleAPI);           // 发起请求

    // 判断查询结果
    if (data.message == "OK") {
      let resData = data.data.list;
      result.push(...resData);
      count--;
      page += 1;
      endID = resData[resData.length - 1].id;

      if (resData.length < size) {
        query = false;
        bool = false;
      } else if (count <= 0) {
        bool = false;
      }
    }
  }

  return {
    result,
    page,
    endID,
    query
  };
}