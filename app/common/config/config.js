'use strict';
/**
 * config
 */

exports.__esModule = true;
exports.default = {
  //服务监听的端口
  port: process.env.OPENSHIFT_NODEJS_PORT || '8360',
  //服务监听的 host
  host: process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1',
  //项目编码
  encoding: "utf-8",
  //pathname 去除的后缀，路由解析中使用
  pathname_suffix: ".html",
  //请求超时时间
  timeout: 120,
  //是否开启自定义路由
  route_on: true,
  // 是否处理静态资源请求， porxy_on 开启下可以关闭该配置
  resource_on: true,
  //判断为静态资源请求的正则
  resource_reg: /^(?!(api|rest|home|auc_item|auctioning|auction-end|admin|search|info|login|signup|user|todo))/, //排除 api rest 接口和前端的url
  default_module: "home", //默认模块
  default_controller: "main", //默认的控制器
  default_action: "index" };
//# sourceMappingURL=config.js.map