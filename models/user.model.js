/**
 * Created by mhkz
 * User: 940385517@qq.com
 * Date: 2018/7/25
 * Time: 上午7:48
 *
 */

const db = require('../db/mysql');
const Sequelize = db.sequelize;
const User = Sequelize.import('../schema/users.js');
User.sync({force:false});

class UserModel {

    /**
     * 创建用户
     * @param user
     * @returns {Promise<boolean>}
     */
    static async create (user) {
        let {username, password} = user;
        await User.create({
            username,
            password
        })
        return true;
    }

    /**
     * 删除用户
     * @param id
     * @returns {Promise<boolean>}
     */
    static async delete(id) {
        await User.destroy({
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
        const userList = await User.findAll({
            attributes: ['id', 'username']
        })
        return userList;
    }

    /**
     * 根据用户名查询用户信息
     * @param username
     * @returns {Promise<*>}
     */
    static async findUserByName (username) {
        return await User.findOne({
            where: {
                username
            }
        }).catch(error => error)
    }
}

module.exports = UserModel;