# eggjs-admin
### 基于egg.js+jwt+mysql编写的开箱即用的权限管理后台
### 后台: egg.js
### 数据库: mysql


👤 **tuchongyang**

* Github: [@tuchongyang](https://github.com/tuchongyang)
* QQ: 779311998
* QQ群: 145679486

### 已实现功能
#### 使用之前请先了解`egg.js`，然后把`/server/config/config.local.js`数据库配置成自己的，只要手动创建数据库就行，数据表在系统运行时会自动创建,并且自动创建超级管理员账号,为了系统稳定性该账号不可以被删除,不可以被降级权限

- [x] 注册
- [x] 登录
- [x] token校验过期处理（临时过期，永久过期）
- [ ] 微信登录
- [x] 个人资料修改
- [x] 角色管理，（增加，删除，修改）系统默认创建超级管理员角色，除了超级管理员任何角色不可对其删除修改
- [x] 权限管理 对每个角色分配不同的页面路由权限和按钮权限，(当前角色的用户只能分配自己拥有的页面权限和按钮权限)
- [x] 管理员对普通用户资料修改
- [x] 账号管理（增加，删除，修改）系统默认创建超级管理员账号，除了超级管理员任何角色不可对其删除修改
- [x] 添加账号
- [x] 用户列表
- [x] 用户状态管理




## 结语
如果这个框架对你有帮助的话，请给个星点个star



