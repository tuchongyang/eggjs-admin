import { Service } from 'egg';


/**
 * role Service
 */
export default class RoleService extends Service {

  /**
   * 列表
   * @param params - 列表查询参数
   */
    public async list(options) {
        let {page = 1, pageSize = this.config.pageSize} = options
        let list = await this.app.model.SystemRole.findAndCountAll({
            limit: +pageSize,
            offset: pageSize * (page-1)
        })
        return list;
    }
    
  /**
   * 保存
   * @param options - 参数
   */
    public async save(options: any) {
        const { ctx } = this
        let results = { code: 10000, message: "失败", }
        await ctx.model.SystemRole.upsert(options).then(() => {
            results = { code: 0, message: "添加成功", }
        }).catch(err => {
            results = { code: 10000, message: err, }
        })

        return results
    }

    public async detail(id){
        // const { ctx } = this
        let data = await this.app.model.SystemRole.findOne({where: {id}})
        return data
    }
    //删除
    public async remove(id){
        let results
        await this.ctx.model.SystemRole.destroy({ where: { id}}).then(() => {
            results = { code: 0, message: "删除成功", }
        }).catch(error => {
            results = { code: 10000, message: error, }
        })
        return results
    }
    // 获取角色菜单
    async getMenuTree (roleId:number) {
        const { ctx } = this
        let list = await ctx.model.SystemRoleMenu.findAll({
            where: {roleId: roleId},
            include:[
                {model: this.app.model.SystemMenu,as: 'menu'}
            ]
        })
        list = list.map(item=>item.menu);
        let result:Array<any> = [];
        let find = (menus,parentId)=>{
            list.filter(item=>item.parentId==parentId).map(item=>{
                item.dataValues.children = [];
                find(item.dataValues.children,item.id);
                menus.push(item);
            })
        }
        find(result,null);
        return result
    }
    async saveMenuTree(roleId:number,menus: object){
        /**先将树形菜单checked为true的菜单取出来 */
        let checkedIds:number[] =[];
        let checked = (menus)=>{
            for(let i=0;i<menus.length;i++){
                if(menus[i].checked){
                    checkedIds.push(menus[i].id)
                }
                if(menus[i].children && menus[i].children.length){
                    checked(menus[i].children)
                }
            }
        }
        checked(menus);
        let roleMenus = checkedIds.map(a=>({roleId: roleId,menuId:a}));
        /**删除原来角色对应菜单，再重新保存一份新的 */
        await this.ctx.model.SystemRoleMenu.destroy({
            where: {roleId: roleId}
        })
        return await this.ctx.model.SystemRoleMenu.bulkCreate(roleMenus);

    }
}
