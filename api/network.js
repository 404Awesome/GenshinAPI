const axios = require("axios");
let { handleHref } = require("./utils");

async function Request(api) {
  let page = 1;
  let endID = 0;
  let size = 20;
  let bool = true;
  let result = [];

  while (bool) {
    let handleAPI = handleHref(api, page, endID, size);
    let { data } = await axios.get(handleAPI);
    if (data.message == "OK") {
      let resArr = data.data.list;
      result.push(...resArr);

      if (resArr.length < size) {
        bool = false;
      } else {
        page += 1;
        endID = resArr[resArr.length - 1].id;
      }
    }
  }

  return result;
}

module.exports = Request;
