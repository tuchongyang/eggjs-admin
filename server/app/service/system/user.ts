import { Service } from 'egg';
const crypto = require('crypto');


/**
 * User Service
 */
export default class UserService extends Service {

  /**
   * 列表
   * @param params - 列表查询参数
   */
    public async list(options) {
        let {page = 1, pageSize = this.config.pageSize} = options
        let list = await this.app.model.SystemUser.findAndCountAll({
            limit: +pageSize,
            offset: pageSize * (page-1)
        })
        return list;
    }
    
  /**
   * 保存
   * @param data - 列表查询参数
   */
    public async save(options: any) {
        const { ctx } = this
        const {  password } = options
        let results = { code: 10000, message: "失败", }
        await ctx.model.SystemUser.findOne({
            where: { username:options.username, },// 查询条件 
        }).then(async result => {
            if (!result) {
                const hash = crypto.createHash('md5');
                options.password = hash.update(password).digest('hex')
                await ctx.model.SystemUser.create(options).then(() => {
                    results = { code: 0, message: "添加成功", }
                }).catch(err => {
                    results = {
                        code: 10000,
                        message: err,
                    }
                })
            } else {
                results = {
                    code: 10000,
                    message: "该账号已存在",
                }
            }
        })

        return results
    }
    /**
     * 登录
     * @param options - 参数
     */
    public async login(options: any) {
        const { ctx } = this
        const { username, password } = options
        let results = {
            code: 10000,
            message: "失败",
            token:''
        }
        await ctx.model.SystemUser.findOne({
            where: {
                username, // 查询条件
            },
        }).then(async result => {
            if (result) {
                const hash = crypto.createHash('md5');
                options.password = hash.update(password).digest('hex')
                
                await ctx.model.SystemUser.findOne({
                    where: options,
                }).then(() => {
                    /*
                    * sign({根据什么生成token})
                    * app.config.jwt.secret 配置的密钥
                    * {expiresIn:'24h'} 过期时间
                    */
                    
                    const token = this.app.jwt.sign({ username,password }, this.config.jwt.secret,{expiresIn:'24h'});
                    results = {
                        code: 0,
                        message: "登录成功",
                        token
                    }
                }).catch(err => {
                    results = {
                        code: 10000,
                        message: err,
                        token: ''
                    }
                })
            } else {
                results = { code: 10000, message: "账号不存在", token: '' }
            }
        })

        return results
    }

    public async detail(){
        const { ctx } = this
        return ctx.state
    }
    //删除
    public async remove(id){
        let results
        await this.ctx.model.SystemUser.destroy({ where: { id}}).then(() => {
            results = { code: 0, message: "删除成功", }
        }).catch(error => {
            results = { code: 10000, message: error, }
        })
        return results
    }
    // 登录查询个人信息
    async getUserInfo (options) {
        const { ctx } = this
        let userInfo = "";
        await ctx.model.SystemUser.findOne({
            where: options,
        }).then(async res => {
        
            if (res) {
                // const roleInfo = await ctx.model.SystemRole.findById(res.role_id)
                // res.setDataValue("roleName", roleInfo.name)
                // await ctx.model.SystemRolePermission.findOne({
                //     where: { role_id: res.role_id },
                // }).then(async perRes => {
                // if (perRes) {
                //     res.setDataValue("authorityRouter", perRes.permission_page)
                //     res.setDataValue("permissionButton", perRes.permission_button)
                // }

                // })

            }
            userInfo = res
        })
        return userInfo
    }
}
