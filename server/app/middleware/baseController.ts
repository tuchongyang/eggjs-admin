import { Controller } from 'egg';
import { bp } from 'egg-blueprint'

export class baseController extends Controller{
    
    @bp.get('/mtest')
    public async test() {
        const { ctx } = this;
        
        ctx.success('测试')
    }
}