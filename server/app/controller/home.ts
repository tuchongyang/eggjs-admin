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
    @bp.post('/login')
    public async login(){
        const { ctx } = this;
        let {username,password} = ctx.request.body;
        const token = this.app.jwt.sign({ username,password }, this.config.jwt.secret,{expiresIn:'24h'});
        /*
        * sign({根据什么生成token})
        * app.config.jwt.secret 配置的密钥
        * {expiresIn:'24h'} 过期时间
        */
        
       ctx.success(token)

    }
}
