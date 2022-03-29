const axios = require("axios");
let { handleHref, wait } = require("./utils");

async function Request(api) {
  let page = 1;
  let endID = 0;
  let size = 20;
  let bool = true;
  let result = [];

  while (bool) {
    let handleAPI = handleHref(api, page, endID, size);
    let res = await axios.get(handleAPI);
    if (res.data.message == "OK") {
      let resArr = res.data.data.list;
      result.push(...resArr);

      if (resArr.length < size) {
        bool = false;
      } else {
        page += 1;
        endID = resArr[resArr.length - 1].id;
        await wait(200);
      }
    }
  }

  return result;
}

module.exports = Request;
