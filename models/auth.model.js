const authSchema = require('../schema/auth.schema');

const crypto = require('crypto')

class AuthModel {

    /**
     * 创建用户
     * @param user
     * @returns {Promise<boolean>}
     */
    static async create () {
        await authSchema.create({
            username: 'mhkz',
            slogan: '武功再高也怕菜刀',
            password:crypto.createHash('md5').update('123456').digest('hex')

        })
        return true;
    }

    /**
     * 删除用户
     * @param id
     * @returns {Promise<boolean>}
     */
    static async delete(id) {
        await authSchema.destroy({
            where: {
                id,
            }
        })
        return true;
    }

    /**
     * 查询用户列表
     * @returns {Promise<*>}
     */
    static async findAllUserList() {
        const userList = await authSchema.find({

        })
            .exec()
            .catch(err => {
                throw(500, '服务器内部错误-查找admin错误！')
            })
        return userList;
    }

    /**
     * 根据用户名查询用户信息
     * @param username
     * @returns {Promise<*>}
     */
    static async findUserByName (username) {
        return await authSchema.findOne({
                    username: username
               }).catch(error => error)
    }
}

module.exports = AuthModel;