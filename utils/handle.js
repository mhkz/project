/**
 * Created by mhkz
 * User: 940385517@qq.com
 * Date: 2018/7/30
 * Time: 下午9:53
 * desc: 公共解析器
 */

/* 公共解析器 */

exports.handleRequest = ({ ctx, controller }) => {
    console.log("111111111")
    const method = ctx.request.method;
    const support = !!controller[method];
    support && controller[method](ctx);
    support || res.status(405).jsonp({ code: 0, message: '不支持该请求类型！' })
    // if (support || ctx.status === 405) {
    // 	ctx.body = { code: 0, message: '不支持该请求类型！' }
    // }
};

exports.handleError = ({ ctx, message = '请求失败', err = null }) => {
    ctx.body = { code: 0, message, debug: err };
};

exports.handleSuccess = ({ ctx, message = '请求成功', result = null }) => {
    ctx.body = { code: 1, message, result };
};

exports.handleThrottle = (method, delay) => {
    let canRun = true;
    return () => {
        if (canRun) {
            canRun = false;
            method();
            setTimeout(function() {
                canRun = true;
            }, delay);
        }
    }
}