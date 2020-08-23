module.exports = app => {
    const { STRING, INTEGER } = app.Sequelize;
  
    const User = app.model.define('system_user', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        username: { type: STRING, unique: true, allowNull: false }, // 用户名
        email: { type: STRING }, // 邮箱
        password: { type: STRING, allowNull: false }, // 密码
        name: STRING, // 姓名
        sex: { type: INTEGER, defaultValue: 1 }, // 用户性别：1男性, 2女性, 0未知
        // age: { type: INTEGER, defaultValue: 0 }, // 年龄
        avatar: STRING, // 头像
        company: STRING, // 公司
        department: STRING, // 部门
        phone: { type: STRING }, // 手机号码
        roleId: INTEGER, // 角色id
        status: { type: INTEGER, defaultValue: 1 }, //  用户状态： 0:禁用, 1:启用
        lastLoginTime: INTEGER, // 上次登录时间
        unionid: STRING, // 微信unionid
        openid: STRING, // 微信openid
        // session_key: STRING, // 微信session_key
    },{freezeTableName: true});
  
    return User;
};