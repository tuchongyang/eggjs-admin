import { Context } from 'egg';
module.exports = function(){
    return async function authUser(ctx: Context, next: () => Promise<any>) {
        const token = ctx.request.header.authorization;
    //   let decode: any;
        if (token) {
            try {
                // 解码token
                ctx.app.jwt.verify(token, ctx.app.config.secret,(err, payload) => {
                    if(!err){
                        ctx.session.user = payload.user;
                    }
                });
            } catch (error) {
                
            }
        } 
        await next();
    }
};

  