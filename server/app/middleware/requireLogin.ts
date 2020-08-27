import { Context } from 'egg';
module.exports = function(){
    return async function requireLogin(ctx: Context) {
        const token = ctx.request.header.authorization;
    //   let decode: any;
        if (token) {
            try {
                // 解码token
                ctx.app.jwt.verify(token, ctx.app.config.secret,(err, payload) => {
                    if(err){return false}
                    else{
                        ctx.session.user = payload.user
                    }
                });
                
                return true;
            } catch (error) {
                ctx.fail(401,error.message||'解析失败')
                return false;
            }
        } else {
            ctx.fail(401,"未登录")
            return false;
        }
    }
};

  