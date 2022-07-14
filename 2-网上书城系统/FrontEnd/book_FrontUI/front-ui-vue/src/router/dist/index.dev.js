"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _Home = _interopRequireDefault(require("../views/Home.vue"));

var _Login = _interopRequireDefault(require("../components/user/Login.vue"));

var _Register = _interopRequireDefault(require("../components/user/Register.vue"));

var _Foget = _interopRequireDefault(require("../components/user/Foget.vue"));

var _UseMail = _interopRequireDefault(require("../components/user/UseMail"));

var _BookStore = _interopRequireDefault(require("../views/BookStore"));

var _GoodsList = _interopRequireDefault(require("../components/goods/GoodsList.vue"));

var _GoodsDetail = _interopRequireDefault(require("../components/goods/GoodsDetail.vue"));

var _OrderConfirm = _interopRequireDefault(require("../components/order/OrderConfirm.vue"));

var _OrderFinish = _interopRequireDefault(require("../components/order/OrderFinish.vue"));

var _MyInfo = _interopRequireDefault(require("../components/userCenter/MyInfo"));

var _MyCenter = _interopRequireDefault(require("../components/userCenter/MyCenter"));

var _Address = _interopRequireDefault(require("../components/userCenter/Address"));

var _Comment = _interopRequireDefault(require("../components/userCenter/Comment.vue"));

var _App = _interopRequireDefault(require("../App.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

_vue["default"].use(_vueRouter["default"]);

var routes = [{
  path: '/',
  redirect: '/user/userLogin'
}, {
  path: '/user/userLogin',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../components/user/UserLogin.vue'));
    });
  }
}, // {
//   path: '/user/login',
//   component: Login
// },
{
  path: '/user/register',
  component: _Register["default"]
}, {
  path: '/user/forget',
  component: _Foget["default"]
}, {
  path: '/user/forget/useMail',
  component: _UseMail["default"]
}, {
  path: '/home',
  name: 'Home',
  component: _Home["default"]
}, {
  path: '/goods',
  component: _BookStore["default"],
  children: [{
    path: 'goodsList',
    component: _GoodsList["default"]
  }, {
    path: 'goodsDetail',
    component: _GoodsDetail["default"]
  }]
}, {
  path: '/order',
  component: _BookStore["default"],
  children: [{
    path: 'orderConfirm',
    component: _OrderConfirm["default"]
  }, {
    path: 'orderFinish',
    component: _OrderFinish["default"]
  }]
}, {
  path: '/userCenter',
  component: _BookStore["default"],
  children: [{
    path: '/address',
    component: _Address["default"]
  }, {
    path: '/myCenter',
    component: _MyCenter["default"]
  }, {
    path: '/myInfo',
    component: _MyInfo["default"]
  }, {
    path: '/Comment',
    component: _Comment["default"]
  }]
}];
var router = new _vueRouter["default"]({
  routes: routes
});
var _default = router;
exports["default"] = _default;