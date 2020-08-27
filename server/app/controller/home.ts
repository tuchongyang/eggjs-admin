import { Controller } from 'egg';
import { bp } from 'egg-blueprint'
// const jwt = require('../middleware/jwt')

export default class HomeController extends Controller {
    @bp.get('/')
    public async index() {
      const { ctx } = this;
      ctx.body = await ctx.service.test.sayHi('egg');
    }
    // @bp.get('/test',jwt())
    public async test(){
        const { ctx } = this;
        ctx.success('成功获取到数据')
    }
}
