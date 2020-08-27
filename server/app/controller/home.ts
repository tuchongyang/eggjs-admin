import { Controller } from 'egg';
import { bp } from 'egg-blueprint'

export default class HomeController extends Controller {
    @bp.get('/')
    public async index() {
      const { ctx } = this;
      ctx.
      ctx.body = await ctx.service.test.sayHi('egg');
    }
    @bp.get('/test')
    public async test(){
        const { ctx } = this;
        ctx.success()
    }
}
