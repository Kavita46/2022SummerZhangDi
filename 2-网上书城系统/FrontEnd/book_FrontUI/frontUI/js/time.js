var t = 3;
setInterval("refer()", 1000);
function refer() {
  if (t == 0) {
    location.href = "..//4-userCenter-myOrder.html";
  }
  document.getElementById("show").innerHTML =
    "支付成功," + t + "秒后跳转到订单页";
  t--;
}
