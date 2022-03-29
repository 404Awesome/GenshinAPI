// 处理 base64编码问题
function decoding(data) {
  if (data) {
    let res = Buffer.from(data, "base64").toString("utf8");
    return res;
  }
}

// 处理请求链接
function handleHref(href, page, endID, size) {
  // 修改 page
  href = href.replace(/(?<=page=)\d+/g, page);
  // 修改 endID
  href = href.replace(/(?<=end_id=)\d+$/g, endID);
  // 修改 size
  href = href.replace(/(?<=size=)\d+/g, size);
  return href;
}

// 延迟函数
function wait(ms = 100) {
  return new Promise((resolve) => setTimeout(() => resolve(), ms));
}

module.exports = {
  decoding,
  handleHref,
  wait,
};
