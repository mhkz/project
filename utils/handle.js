/**
 * Created by mhkz
 * User: 940385517@qq.com
 * Date: 2018/7/30
 * Time: 下午9:53
 * desc: 公共解析器
 */

/* 公共解析器 */

exports.handleRequest = ({ ctx, controller }) => {
    const method = ctx.request.method;
    const support = !!controller[method];
    if (support) return controller[method](ctx)
    return ctx.throw(404, '不支持的请求类型')
};

exports.handleError = ({ ctx, message = '请求失败', err = null }) => {
    ctx.body = { code: 0, message, debug: err };
};

exports.handleSuccess = ({ ctx, message = '请求成功', result = null }) => {
    console.log("result", { code: 1, message, result })
    ctx.response.body = { code: 1, message, result };
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