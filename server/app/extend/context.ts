module.exports = {
    SUCCESS_CODE: 0, // 成功
    NO_LOGIN_CODE: 100, // 未登录
    UNIQUE_CODE: 200, // 唯一性冲突
    ERROR_CODE: 500, // 失败
    user() {
        return this.ctx.session.user;
    },
    
    success(data, status) {
        this.body = { code: this.SUCCESS_CODE, data };
        this.status = status || 200;
    },
    
    fail(code, message,data) {
        this.body = { code, message, data };
        this.status = 200;
    },
    
    notFound(msg) {
        msg = msg || 'not found';
        this.throw(404, msg);
    }
  };