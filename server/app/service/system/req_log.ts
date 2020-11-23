import { Service } from 'egg';

/**
 * 请求追踪服务
 */
export default class SysReqLogService extends Service {

    /**
     * 记录日志
     */
    async save(url: string, params: string, status: number, consumeTime: number, method: string | undefined, userId: number | null) {
        const ip = this.ctx.helper.getReqIP();
        await this.app.model.SystemReqLog.create({
            action: url,
            params: JSON.stringify(params),
            userId: userId === null ? undefined : userId,
            ip,
            method: method ? method.toUpperCase() : undefined,
            status,
            consumeTime,
        });
    }

    /**
     * 计算日志总数
     */
    async count() {
        return await this.app.model.SystemReqLog.count();
    }

    /**
     * 分页加载日志信息
     */
    async page(page: number, count: number) {
        const result = await this.app.model.SystemReqLog.find({
            order: {
                id: 'DESC',
            },
            take: count,
            skip: page * count,
        });
        return result;
    }


}
