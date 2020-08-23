import { Controller } from 'egg';
import { bp } from 'egg-blueprint'
/**
* @Controller 角色
*/
bp.prefix('/api/role', 'RoleController')
export default class RoleController extends Controller {
    /** 分页列表 */
    @bp.get('/')
    public async index() {
        const { ctx } = this;
        let list = await ctx.service.system.role.list(ctx.query)
        ctx.success(list)
    }

    @bp.post('/save')
    public async save(){
        const { ctx } = this;
        let params = ctx.request.body;
        let ret = await ctx.service.system.role.save(params);
        if(ret.code==0){
            ctx.success()
        }else{
            ctx.fail(ret.code, ret.message)
        }
    }
    @bp.del('/:id')
    public async remove(){
        const { ctx } = this;
        let ret = await ctx.service.system.role.remove(ctx.params.id);
        if(ret.code==0){
            ctx.success()
        }else{
            ctx.fail(ret.code, ret.message)
        }
    }
    
    @bp.get('/:id')
    public async detail(){
        const { ctx } = this;
        const data = await ctx.service.system.role.detail(ctx.params.id)
        
        ctx.success(data)
       
    }
}