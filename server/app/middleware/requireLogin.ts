import { Context } from 'egg';
module.exports = function(){
    return async function requireLogin(ctx: Context) {
        const token = ctx.request.header.authorization;
    //   let decode: any;
        if (token) {
            try {
                // 解码token
                ctx.app.jwt.verify(token, ctx.app.config.secret);
                return true;
            } catch (error) {
                ctx.fail(401,error.message||'解析失败')
                return false;
            }
        } else {
            ctx.fail(401,"没有token")
            return false;
        }
    }
};

  