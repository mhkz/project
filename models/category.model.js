/**
 * Created by mhkz
 * User: 940385517@qq.com
 * Date: 2018/8/16
 * Time: 上午7:32
 *
 */

const CategorySchema = require('../schema/category.schema');

class CategoryModel {
    static async createCategory () {
        CategorySchema.create({
            name: 'code',
            slug: 'code',
            description: '代码所思考'
        })
    }

    /**
     * @desc 查询所有的分类
     * @returns {Promise<Promise|*|Promise<T>>}
     */
    static async findAllCategory () {
        return await CategorySchema.find({})
    }
}
module.exports= CategoryModel