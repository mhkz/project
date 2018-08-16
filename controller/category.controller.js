/**
 * Created by mhkz
 * User: 940385517@qq.com
 * Date: 2018/8/12
 * Time: 下午4:08
 *
 */

const CategoryModel = require("../models/category.model");
const config = require("../config");

const {
    handleRequest,
    handleError,
    handleSuccess,
    handleThrottle
} = require("../utils/handle");


const categoryCtrl = { list: {}};
categoryCtrl.list.GET = async ctx => {
    let categories = await CategoryModel.findAllCategory();
    if (categories) {
        handleSuccess({ctx, result: { categories }, msg: "分类列表"})
    }
}

exports.list = ctx => handleRequest({ ctx, controller: categoryCtrl.list });