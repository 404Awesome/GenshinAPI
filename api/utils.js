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

module.exports = {
  handleHref
};
