'use strict';

export default {
    //服务监听的端口
    port: process.env.OPENSHIFT_NODEJS_PORT || '8360',
    //服务监听的 host
    host: process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1',
    auto_reload: false,
    log_request: true,

    error: {
        detail: true
    }
};