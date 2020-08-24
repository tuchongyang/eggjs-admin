module.exports = app => {
    const { INTEGER } = app.Sequelize;
  
    const User = app.model.define('system_role_menu', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        roleId: INTEGER, // 角色Id
        menuId: INTEGER, //菜单Id
        status: { type: INTEGER, defaultValue: 1 }, //  状态： 0:禁用, 1:启用
    },{freezeTableName: true});

    return User;
};