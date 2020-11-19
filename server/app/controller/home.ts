import { Controller } from 'egg';
import { bp } from 'egg-blueprint'

export default class HomeController extends Controller {
    @bp.get('/')
    public async index() {
      const { ctx } = this;
      ctx.body = "欢迎访问eggjs-admin"
    }
    @bp.get('/test')
    public async test(){
        const { ctx } = this;
        ctx.success()
    }
}
