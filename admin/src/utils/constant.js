/*
* des  枚举类型(数据转换)
*
* author     hwx
* 
* */


/**
 * @description     FIXME qinjunqiang 优化调整
 *                  value 对应后台的参数（* 该字段的值不可随意修改）
 *                  title 仅仅是写给自己看或后期维护的人看（过一段时间后给自己或维护的人看能很快对应上）
 *                  displayName 最终的翻译后的字段
 * */
let _constMap = (() => {
    let obj = {
        // 磁盘种类
        DiskType: [
            { value: 'cloud', lang: 'cloud', title: '普通云盘'},
            { value: 'cloud_efficiency', lang: 'cloud_efficiency', title: '高效云盘' },
            { value: 'cloud_ssd', tencent:'CLOUD_SSD',lang: 'cloud_ssd', title: 'SSD 云盘' },
            { value: 'ephemeral_ssd', lang:'ephemeral_ssd', title: '本地 SSD 盘' },
            { value: 'ephemeral', lang:'ephemeral', title: '本地磁盘' },
            { value: 'cloud_essd', lang:'cloud_essd', title: 'ESSD 云盘' },
            { value: 'CLOUD_PREMIUM', lang: 'CLOUD_PREMIUM', title:'高性能云硬盘'},//tencent
            { value: 'SATA', lang: 'huawei_sata', title:'普通IO磁盘'},//tencent
            { value: 'SAS', lang: 'huawei_sas', title:'高IO磁盘'},//tencent
            { value: 'SSD', lang: 'huawei_ssd', title:'超高IO磁盘'},//tencent
            // { value: 'CLOUD_SSD',lang:'cloud_ssd',title:'SSD 云盘'},
        ],

        // 磁盘属性
        DiskAttr: [
            { value: 'system',tencent: 'SYSTEM_DISK', lang: 'system', title: '系统盘' },
            { value: 'data',tencent: 'DATA_DISK', lang: 'data', title: '数据盘' }
        ],

        // 磁盘状态
        DiskStatus: [
            { value: 1, lang:'error', title: '错误' },
            { value: 2, lang:'inUse', title: '使用中' },
            { value: 3, lang:'available', title: '可用' },
            { value: 4, lang:'attaching', title: '挂载中' },
            { value: 5, lang:'detaching', title: '卸载中' },
            { value: 6, lang:'creating', title: '创建中' },
            { value: 7, lang:'deleted', title: '已释放'},
            { value: 8, lang:'reiniting', title: '重新初始化'},
        ],

        // 云主机付费方式
        PaymentMethods: [
            { value: 'PrePaid',tencent:"PREPAID",huawei:"prePaid", lang:'PrePaid', title: '包年包月' },
            { value: 'PostPaid',tencent:"POSTPAID_BY_HOUR",huawei: "postPaid", lang:'PostPaid', title: '按量付费' }
        ],

        // 云主机停止模式
        StoppedMode: [
            { value: 'KeepCharging',tencent:'KEEP_CHARGING', lang:'KeepCharging', title: '继续收费' },
            { value: 'StopCharging',tencent:'STOP_CHARGING', lang:'StopCharging', title: '不收费' },
            { value: 'Not-applicable',tencent:'NOT_APPLICABLE', lang:'StoppedMode', title: '不支持停机不收费'},
        ],
        // 申请审批状态
        AuditStatus: [
            { value: '0', lang:'applyStatus', title: '申请中' },
            { value: '1', lang:'auditStatus', title: '审核中' },
            { value: '2', lang:'passStatus', title: '审核通过'},
            { value: '3', lang:'notPassStatus', title: '审核不通过'},
            { value: '4', lang:'rejectStatus', title: '驳回'},
            { value: '5', lang:'revocation', title: '撤销'},
        ],
        //审批流程任务状态
        TaskStatus: [
            { value: '0', lang:'waitReview', title: '待审批' },
            { value: '1', lang:'passStatus', title: '审核通过' },
            { value: '2', lang:'notPassStatus', title: '审核不通过'},
            { value: '3', lang:'rejectStatus', title: '驳回'},
            { value: '4', lang:'initiateApproval', title: '发起审批'},
            { value: '8', lang:'comment', title: '评论'},
        ],
        //云资源产品代码
        ProductCode:[
            {value:'slb',lang:'loadBalance',title:'负载均衡'},
            {value:'redisInstance',lang:'redis',title:'云数据库redis'},
            {value:'rdsInstance',lang:'rds',title:'云数据库rds'},
            {value:'instance',lang:'instance',title:'云主机'},
            {value:'volume',lang:'volume',title:'云盘'},
            {value:'nas',lang:'nas',title:'文件存储NAS'},
            {value:'oss',lang:'oss',title:'对象存储OSS'},
            {value:'nat_gw',lang:'nat',title:'NAT网关'},
            {value:'eip',lang:'eip',title:'弹性公网'},
            {value:'ddos',lang:'ddos',title:'DDOS高防IP'},
            {value:'waf',lang:'waf',title:'WEB应用防火墙'},
            {value:'cas',lang:'ssl',title:'SSL证书'},
            {value:'mq',lang:'mq',title:'消息队列'}

        ],
        //部署状态
        DeployStatus: [
            { value: '1', lang:'notPerformed', title: '未执行'},
            { value: '2', lang:'executing', title: '正在执行'},
            { value: '3', lang:'success', title: '成功'},
            { value: '4', lang:'error', title: '出错'},
        ],

        //审批类型(目前只有资源申请这一类)
        ApprovalType: [
            { value: 'resource', lang:'resourceApplication', title: '资源申请'},
        ],

        //云主机带宽类型
        InternetChargeType:[
            { value: 'PayByBandwidth', tencent: 'BANDWIDTH',huawei:"bandwidth", lang:'PayByBandwidth', title: '按固定带宽' },
            { value: 'PayByTraffic', tencent: 'TRAFFIC', huawei:"traffic",lang:'PayByTraffic', title: '按使用流量' },
        ],
        //单位
        Unit:[
            { value: 'Year',langKey:'unit', lang:'year', title: '年' },
            { value: 'Month',langKey:'unit', lang:'month', title: '个月' },
            { value: 'Hour',langKey:'unit', lang:'hour', title: '个小时' },
        ],
        //负载均衡状态
        SlbStatusList:[
            { value: '',langKey:'common',lang:'allStatus'},
            { value: 1, langKey:'common',lang:'running'},
            { value: 0, langKey:'common',lang:'stopped'},
            { value: 2, langKey:'common',lang:'locked'},
        ],
        //redis状态
        redisStatusList:[
            { value:'',langKey:'common',lang:'allStatus'},
            { value:0,langKey:'common',lang:'creating'},
            { value:1,langKey:'common',lang:'normal'},
            { value:2,langKey:'common',lang:'underRevision'},
            { value:3,langKey:'common',lang:'disabled1'},
            { value:4,langKey:'common',lang:'removeIns'},
            { value:5,langKey:'table',lang:'deleted1'},
            { value:6,langKey:'common',lang:'transforming'},
            { value:7,langKey:'common',lang:'unavailable1'},
            { value:8,langKey:'table',lang:'createFail'},
            { value:9,langKey:'common',lang:'migrating'},
            { value:10,langKey:'common',lang:'backupRecovering'},
            { value:11,langKey:'common',lang:'minorVersionUpgrading'},
            { value:12,langKey:'common',lang:'networkModifying'},
            { value:13,langKey:'common',lang:'SSLModifying'},
            { value:14,langKey:'common',lang:'majorVersionUpgrading'},
        ],
        ConfigVersion:[
            {value:'low',langKey:'common',lang:'low'},
            {value:'middle',langKey:'common',lang:'middle'},
            {value:'high',langKey:'common',lang:'high'}
        ],
        //云平台
        CloudPlatform:[
            { value: 'aliyun', lang:'aliyun', title: '阿里云' },
            { value: 'tencent', lang:'tencent', title: '腾讯云' },
            { value: 'huawei', lang:'huawei', title: '华为云' },
            { value: 'aws', lang:'aws', title: 'AWS' },
            {value:'azure',lang:'azure',title:'Azure中国'},
            {value:'ctyun',lang:'ctyun',title:'天翼云'}
        ],
        //安全组规则协议类型
        Protocol:[
            { value: 'all', lang:'all', title: '全部' },
            { value:'-1',lang:'all', title: '全部' },
            { value: 'tcp', lang:'protocolTcp', title: '自定义 TCP' },
            { value: 'udp', lang:'protocolUdp', title: '自定义 UDP' },
            { value: 'gre', lang:'protocolGre', title: '全部 GRE' },
            { value: 'icmp', lang:'protocolIcmp', title: '全部 ICMP(IPv4)' },
        ],
        //云资源
        CloudResource:[
            { value: 'flavor',langKey:'cloudResource', lang:'flavor', title: '规格' },
            { value: 'vpc', langKey:'cloudResource',lang:'vpc', title: '专有网络' },
            { value: 'securityGroup', langKey:'cloudResource',lang:'securityGroup', title: '安全组' },
            { value: 'vSwitch', langKey:'cloudResource',lang:'vSwitch', title: '交换机' },
        ],
        SysBit:[
            { value: 'x86_64',lang:'bit64', title: '64位' },
            { value: 'i386',lang:'bit32', title: '32位' },
        ],
        
        //取值范围：New：新购，Renew：续费，Upgrade：升级，Refund：退款 ,
        OrderType:[
            {value: 'New', lang:"orderNew", title:'新购'},
            {value: 'Renew', lang:"renew", title:'续费'},
            {value: 'Upgrade', lang:"upgrade", title:'升级'},
            {value: 'Refund', lang:"refund", title:'退款'},
        ],
        //支付状态。取值范围：Unpaid：未支付，Paid：已支付，Cancelled：已作废 ,
        PaymentStatus:[
            { lang: 'all', value: '' },
            {value: 'Unpaid', lang:"unpaid", title:'未支付'},
            {value: 'Paid', lang:"paid", title:'已支付'},
            {value: 'Cancelled', lang:"cancelled", title:'已作废'},
        ],
        //订单类型，1预付费，2后付费，3升级，4续费 ,
        subscriptionType :[
            {value: 1,langKey:'subscriptionType', lang:"prepaid", title:'1新购'},
            {value: 2,langKey:'subscriptionType', lang:"postpaid", title:'2后付费'},
            {value: 3,langKey:'subscriptionType', lang:"upgrade", title:'3升级'},
            {value: 4,langKey:'subscriptionType', lang:"renewalFee", title:'4续费'},
        ],
        AuditStatusList:[
            {value:'add',langKey:'actions',lang:'add',title:'新增'},
            {value:'login',langKey:'form',lang:'login',title:'登录'},                            
            {value:'update',langKey:'actions',lang:'update',title:'更新'},
            {value:'reboot',langKey:'actions',lang:'reboot',title:'重启'},
            {value:'query',langKey:'actions',lang:'query',title:'查询'},
            {value:'get',langKey:'actions',lang:'get',title:'获取'},
            {value:'delete',langKey:'actions',lang:'delete',title:'删除'},
            {value:'import',langKey:'common',lang:'import',title:'导入'},
            {value:'export',langKey:'actions',lang:'export',title:'导出'},
            {value:'activate',langKey:'common',lang:'activate',title:'激活'},
            {value:'disable',langKey:'actions',lang:'disable',title:'禁用'},
            {value:'enable',langKey:'actions',lang:'enable',title:'启用'},
            {value:'apply',langKey:'common',lang:'apply',title:'申请'},
            {value:'boot',langKey:'actions',lang:'boot',title:'开机'},
            {value:'shutdown',langKey:'actions',lang:'shutdown',title:'关机'},
            {value:'authorization',langKey:'actions',lang:'authorization',title:'授权'},
            {value:'allocate',langKey:'actions',lang:'allocate',title:'分配'},
            {value:'audit',langKey:'actions',lang:'audit',title:'审核'},
            {value:'deploy',langKey:'actions',lang:'deploy',title:'部署'},
            {value:'synchronize',langKey:'actions',lang:'synchronize',title:'同步'},
            {value:'remove',langKey:'actions',lang:'remove',title:'移除'},
            {value:'download',langKey:'actions',lang:'download',title:'下载'},
            {value:'upload',langKey:'actions',lang:'upload',title:'上传'},
            {value:'uninstall',langKey:'actions',lang:'uninstall',title:'卸载'},
			{value:'invoicePreview',langKey:'common',lang:'invoicePreview',title:'发票预览'},
			{value:'confirmBill',langKey:'common',lang:'confirmBill',title:'确认账单'},
			{value:'generateInvoice',langKey:'common',lang:'generateInvoice',title:'生成税务发票'},
			{value:'assignCloudAccount',langKey:'common',lang:'singleDistribution',title:'分配云账号'},
			{value:'changePassword',langKey:'form',lang:'modifyPwd',title:'修改密码'},
			{value:'sign',langKey:'common',lang:'signing',title:'签约'},
			{value:'invite',langKey:'common',lang:'invite',title:'邀约'},
			{value:'associateCloudAccount',langKey:'common',lang:'associateCA',title:'关联云账号'},
			  
        ],
        // 云主机付费方式
        ChargeType: [
            { value: 'Subscription', lang:'PrePaid', title: '包年包月' },
            { value: 'PayAsYouGo', lang:'PostPaid', title: '按量付费' }
        ],
        //云主机状态
        InstanceStatus:[
            { value: 1, lang: 'running',title: "运行中"},
            { value: 2, lang: 'starting',title: "启动中"},
            { value: 3, lang: 'stopping',title: "停止中"},
            { value: 4, lang: 'stopped',title: "已停止"},
            { value: 5, lang: 'deleted',title: "已释放"},
            { value: 6, lang: 'error',title: "错误"},
            { value: 7, lang: 'stayDestroyed',title: "待销毁"},
            { value: 8, lang: 'destroying',title: "销毁中"},
            { value: 9, lang: 'restarting',title: "重启中"},
        ],
        //VPC状态
        VpcStatusList:[
            { value: '', lang: 'all',title: '全部'},
            { value: 1, langKey:'table', lang: 'pending',title: "配置中"},
            { value: 2, langKey:'table', lang: 'usable',title: "可用"},
            { value: 3, langKey:'common', lang: 'deleted',title: "已释放"},
            { value: 4, langKey:'common', lang: 'error',title: "错误"}
        ],
        //镜像类型
        ImageOwnerAlias:[
            { value: 'system', langKey:'table', lang: 'imageSystem',title: "系统镜像"},
            { value: 'self', langKey:'table', lang: 'imageSelf',title: "自定义镜像"}
        ],
        //镜像状态
        ImageStatus: [
            { value: '', lang: 'all',title: '全部'},
            { value: 1, langKey:'common', lang: 'creating',title: "创建中"},
            { value: 2, langKey:'common', lang: 'available',title: "可用"},
            { value: 3, langKey:'table', lang: 'unavailable',title: "不可用"},
            { value: 4, langKey:'table', lang: 'createFail',title: "创建失败"},
        ],
		//已读未读状态
		MessageStatus: [
		    { value: '', lang: 'all',title: '全部'},
		    { value: true, langKey:'common', lang: 'haveRead',title: "已读"},
		    { value: false, langKey:'common', lang: 'unread',title: "未读"},
		],
		// 流程管理发布状态
		PublishingStatus: [
		    { value: '', lang: 'all',title: '全部'},
		    { value: 1, langKey:'common', lang: 'published',title: "已发布"},
		    { value: 0, langKey:'common', lang: 'notPublished',title: "未发布"},
		],
		// 脚本类型
		ScriptType: [
		    { value: '', lang: 'all',title: '全部'},
		    { value: 1, langKey:'common', lang: 'systemScript',title: "已发布"},
		    { value: 0, langKey:'common', lang: 'authScript',title: "未发布"},
		],
		// 数据运行状态
		DataOperationStatus: [
		    { value: '', lang: 'all',title: '全部'},
		    { value: 1, langKey:'common', lang: 'running',title: "运行中"},
		    { value: 0, langKey:'common', lang: 'creating',title: "创建中"},
			{ value: 2, langKey:'common', lang: 'underRevision',title: "修改中"},
			{ value: 3, langKey:'table', lang: 'disabled',title: "已禁用"},
			{ value: 4, langKey:'common', lang: 'removeIns',title: "清除中"},
			{ value: 5, langKey:'table', lang: 'deleted1',title: "已释放"},
		],
		// 付费类型
		PaymentTypes: [
		    { value: '', lang: 'all',title: '全部'},
		    { value: 'PostPaid', langKey:'common', lang: 'postPayments',title: "后付费"},
		    { value: 'PrePaid', langKey:'common', lang: 'firstPayments',title: "预付费"},
		],
		// 实例类型
		InstanceTypes: [
		    { value: '', lang: 'all',title: '全部'},
		    { value: 'Primary', langKey:'common', lang: 'primaryInstances',title: "主实例"},
		    { value: 'Readonly', langKey:'common', lang: 'readOnlyInstance',title: "只读实例"},
			{ value: 'Guard', langKey:'common', lang: 'disasterPreparedness',title: "灾备实例"},
			{ value: 'Temp', langKey:'common', lang: 'temporaryInstance',title: "临时实例"},
		],
		// 数据库类型
		NetworkType: [
		    { value: '', lang: 'all',title: '全部'},
		    { value: 'VPC', langKey:'route', lang: 'vpc',title: "专有网络"},
		    { value: 'Classic', langKey:'common', lang: 'classicVCP',title: "经典网络"},
		],
		statuStates: [
		    { value: '', lang: 'all',title: '全部'},
		    { value: 1, langKey:'table', lang: 'usable',title: "可用"},
		    { value: 0, langKey:'table', lang: 'unavailable',title: "不可用"},
		],
        /**/
        WorkflowSign: [
            { value: 1, langKey:'form', lang: 'approveCreateTip2',title:'任何一人审批即可通过' },
            { value: 2, langKey:'form', lang: 'approveCreateTip3',title:'所有人审批即可通过' }
        ],
        /*roleType*/
        roleType: [
            { value: 'sales', langKey:'roleType', lang: 'sales',title:'销售量' },
            { value: 'business', langKey:'roleType', lang: 'business',title:'业务类' },
            { value: 'finance', langKey:'roleType', lang: 'finance',title:'财务类' }
        ],

        /*监控 数据库类型*/
        DbType: [
            {value: '1', displayName: 'MySQL'},
            {value: '2', displayName: 'MS SQLServer'},
            {value: '3', displayName: 'Oracle & * SQL Net'},
            {value: '4', displayName: 'Postgre SQL'},
            {value: '5', displayName: 'IBM DB2'},
            {value: '6', displayName: 'Sybase ASE'},
            {value: '7', displayName: 'Informix'},
        ],
        ResourceGroup:[
            {value: 'compute', lang: 'compute', title: '计算'},
            {value: 'storage',lang:'storage',title: '存储'},
            {value: 'network',lang:'network',title: '网络'},
            {value: 'security',lang:'security',title: '安全'},
            {value: 'app',lang:'application',title: '应用'},
            {value: 'database',lang:'database',title: '数据库'},
            {value: 'middleware',lang:'middleware',title: '中间件'},
        ],
        //常用货币单位
        Currency:[
			{value:'CNY',lang:'cny',title:'人民币',symbol:'¥',unit:'yuan'},
			{value:'USD',lang:'usd',title:'美元',symbol:'$',unit:'usd'},
			{value:'HKD',lang:'khd',title:'港币',symbol:'$',unit:'HKDollar'},
			{value:'TWD',lang:'twd',title:'新台币',symbol:'$',unit:'TWDollar'},
			{value:'EUR',lang:'eur',title:'欧元',symbol:'€',unit:'EUYear'},
			{value:'JPY',lang:'jpy',title:'日元',symbol:'¥',unit:'JPYear'},
			{value:'GBP',lang:'gbp',title:'英镑',symbol:'£',unit:'GBYear'},
			{value:'IDR',lang:'idr',title:'印度尼西亚盾',symbol:'Rp',unit:'IDYear'}
		],
        //常用货币单位
        BankType:[
            {value:'A',lang:'bankTypeA',displayName:'政策性银行'},
            {value:'B',lang:'bankTypeB',displayName:'商业银行'},
            {value:'C',lang:'bankTypeC',displayName:'住房储蓄银行'},
            {value:'D',lang:'bankTypeD',displayName:'城市商业银行'},
            {value:'F',lang:'bankTypeF',displayName:'城市信用合作社'},
            {value:'G',lang:'bankTypeG',displayName:'农村商业银行、信用合作社'},
            {value:'H',lang:'bankTypeH',displayName:'信用卡公司'},
            {value:'I',lang:'bankTypeI',displayName:'邮政储蓄机构'},
            {value:'K',lang:'bankTypeK',displayName:'信托投资公司'},
            {value:'L',lang:'bankTypeL',displayName:'企业集团财务公司'},
            {value:'M',lang:'bankTypeM',displayName:'金融租赁公司'},
            {value:'W',lang:'bankTypeW',displayName:'外资银行'},
            {value:'Y',lang:'bankTypeY',displayName:'外资非银行金融机构'},
            {value:'Z',lang:'bankTypeZ',displayName:'其他类金融机构'},
        ],
        //续费付费类型
        chargeType :[
            {value: 1,lang:"PayByBandwidth", en:'PayByBandwidth',title:'按带宽计费'},
            {value: 2,lang:"PayByTraffic", en:'PayByBandwidth',title:'按流量计费'},
        ],
        //EIP的状态
        EIPStatus :[
            {value: 0,lang:"Unknown",langKey:"EIP", en:'Unknown',title:'未知状态',class:'color-gray',icon:"el-icon-question"},
            {value: 1,lang:"ERROR",langKey:"EIP", en:'ERROR',title:'错误',class:'color-red',icon:"el-icon-close"},
            {value: 2,lang:"InUse", langKey:"EIP",en:'InUse',title:'使用中',class:'color-blue',icon:"fa fa-hourglass-1"},
            {value: 3,lang:"Available",langKey:"EIP", en:'Available',title:'可用',class:'color-green',icon:"el-icon-success"},
            {value: 4,lang:"Mounting",langKey:"EIP", en:'Mounting',title:'挂载中',class:'color-orange',icon:"fa fa-cog"},
            {value: 5,lang:"Uninstalling",langKey:"EIP", en:'Uninstalling',title:'卸载中',class:'color-orange',icon:"fa fa-cog"},
            {value: 6,lang:"PENDING_CREATE",langKey:"EIP", en:'PENDING_CREATE',title:'创建中',class:'color-orange',icon:"fa fa-cog"},
            {value: 7,lang:"Released",langKey:"EIP", en:'Released',title:'已释放',class:'color-gray',icon:"fa fa-recycle"},
            {value: 8,lang:"BindFENetCard",langKey:"EIP", en:'BindFENetCard',title:'绑定悬空弹性网卡',class:'color-gray',icon:"el-icon-question"},
            {value: 9,lang:"Releasing",langKey:"EIP", en:'Releasing',title:'正在释放',class:'color-orange',icon:"fa fa-cog"},
            {value: 10,lang:"FREEZED",langKey:"EIP", en:'FREEZED',title:'冻结状态',class:'color-pink',icon:"el-icon-question"},
            {value: 11,lang:"ELB",langKey:"EIP", en:'ELB',title:'负载均衡',class:'color-blue',icon:"el-icon-question"},
        ],
        // 当前绑定的实例类型
        EIPInstanceType :[
            {value: "EcsInstance",lang:"EcsInstance", en:'EcsInstance',title:'VPC类型的ECS实例'},
            {value: "SlbInstance",lang:"SlbInstance", en:'SlbInstance',title:'VPC类型的SLB实例'},
            {value: "Nat",lang:"Nat", en:'Nat',title:'NAT网关'},
            {value: "HaVip",lang:"HaVip", en:'HaVip',title:'高可用虚拟IP'},
            {value: "NetworkInterface",lang:"NetworkInterface", en:'NetworkInterface',title:'辅助弹性网卡'},
        ],
        WorkorderReason:[
            {value:"cloudAccount",displayName:"客户云账号原因"},
            {value:"pool",displayName:"资源池容量原因"},
            {value:"system",displayName:"系统故障"},
            {value:"other",displayName:"其他"}
        ],
        WorkorderStatus:[
            {value: 0, displayName: '运营商未处理', color: '#F1523A' },
            {value: 1, displayName: '运营商正在处理', color: '#FF6600' },
            {value: 2, displayName: '待运营商回复', color: '#FF6600' },
            {value: 3, displayName: '运营商已回复', color: '#5FBBFC' },
            {value: 4, displayName: '已关闭', color: '' },
        ],
		// 云产品的订单状态
		cloudPaymentStatus:[
		    {value: 0, displayName: '未知状态'},
		    {value: 1, displayName: '未支付'},
		    {value: 2, displayName: '已支付'},
		    {value: 3, displayName: '发货中'},
		    {value: 4, displayName: '已发货'},
			{value: 5, displayName: '发货失败'},
			{value: 6, displayName: '已退款'},
			{value: 7, displayName: '已关单'},
			{value: 8, displayName: '订单过期'},
			{value: 9, displayName: '订单已失效'},
			{value: 10, displayName: '产品已失效'},
			{value: 11, displayName: '代付拒绝'},
			{value: 12, displayName: '支付中'},
		],
		// 网络订单状态
		paymentType:[
			{value: 'Unpaid', displayName: '未支付'},
			{value: 'Paid', displayName: '已支付'},
			{value: 'Cancelled', displayName: '已作废'},
		],
        AccountType:[
            {value:"3",displayName:"endUser"},
            {value:"4",displayName:"转售服务商"},
            {value:"5",displayName:"代理服务商"}
        ],
        AccountStatus:[
            {value: 0, displayName: '不可用', className: 'color-gray',icon:'fa fa-minus-circle' },
            {value: 1, displayName: '可用', className: 'color-green',icon:'fa fa-check-circle' },
            {value: 2, displayName: '服务商审核中', className: 'color-orange',icon:'el-icon-time' },
            {value: 3, displayName: '审核不通过', className: 'color-red',icon:'fa fa-minus-circle' },
            {value: 4, displayName: '审核通过', className: 'color-green',icon:'fa fa-check-circle' },
            {value: 5, displayName: '运营商审核中', className: 'color-orange',icon:'el-icon-time' },
            {value: 6, displayName: '禁用', className: 'color-red',icon:'fa fa-minus-circle' },
            {value: 7, displayName: '云账号创建出错', className: 'color-red',icon:'fa fa-minus-circle' },
            {value: 8, displayName: '待填充凭据', className: 'color-orange',icon:'el-icon-time' },
            {value: 9, displayName: '待实名认证', className: 'color-orange',icon:'el-icon-time' },
        ],
        BillDownloadStatus:[
            {value: 0, displayName: '未开始', className: 'color-blue',icon:'el-icon-time' },
            {value: 1, displayName: '进行中', className: 'color-orange',icon:'el-icon-video-pla' },
            {value: 2, displayName: '已完成', className: 'color-green',icon:'fa fa-check-circle' },
            {value: 3, displayName: '已取消', className: 'color-gray',icon:'fa fa-minus-circle' },
            {value: 4, displayName: '检测中', className: 'color-orange',icon:'fa fa-minus-circle' },
            {value: 5, displayName: '计算过程中发生错误', className: 'color-red',icon:'fa fa-minus-circle' },
            {value: 6, displayName: '重新计算汇率', className: 'color-red',icon:'fa fa-minus-circle' },
            {value: 7, displayName: '已废弃', className: 'color-gray',icon:'fa fa-minus-circle' },
        ],
		
		boundary:[
		    {value:'Initial', displayName: '申请中',  },
			{value:'Approved', displayName: '审批通过',  },
			{value:'Allocating', displayName: '正在分配资源',  },
			{value:'Allocated', displayName: '接入施工中',  },
			{value:'Confirmed', displayName: '等待用户确认',  },
			{value:'Enabled', displayName: '已开通',  },
			{value:'Rejected', displayName: '申请被拒绝',  },
			{value:'Canceled', displayName: '已取消',  },
			{value:'Allocation Failed', displayName: '资源分配失败',  },
			{value:'Terminated', displayName: '已终止',  },
		],
        relatedAccount:[
           {value:"0",displayName:"自有云账号"},
           {value:"1",displayName:"经平台申请"}
        ],
        crmStatus:[
           {value:"100000",displayName:"受理中"},
           {value:"101100",displayName:"待审核"},
           {value:"101200",displayName:"待付款"},
           {value:"201300",displayName:"开通中"},
           {value:"300000",displayName:"竣工"},
           {value:"100004",displayName:"作废"},
           {value:"200000",displayName:"已提交"},
           {value:"400000",displayName:"异常"},
           {value:"201900",displayName:"集团订单处理中"},
           {value:"401800",displayName:"取消中"},
           {value:"201700",displayName:"待发送"},
           {value:"401700",displayName:"已撤单"},
           {value:"401900",displayName:"待退费"},
           {value:"402000",displayName:"已退费"},
           {value:"999",displayName:"未知"}
        ],
        NetworkCard:[
            {value:"1",displayName:"已关联",color:'color-blue'},
            {value:"2",displayName:"挂载中",color:'color-orange'},
            {value:"3",displayName:"可用",color:'color-green'},
            {value:"4",displayName:"卸载中",color:"color-orange"},
            {value:"5",displayName:"使用中",color:'color-orange'},
            {value:"6",displayName:"错误",color:'color-red'},
            {value:"7",displayName:"创建中",color:'color-blue'},
            {value:"8",displayName:"删除中",color:'color-orange'},
        ],
        TenantType:[
            { displayName: '服务商', value: '1' },
            { displayName: 'EndUser', value: '2' },
        ],
        TenantTypeMap:{
            '0':[//运营商
                { label: '服务商', value: '1' },
                { label: 'EndUser', value: '2' },
            ],
            '1':[//服务商
                { label: 'EndUser', value: '2' },
            ],
        }
	};
	
    for (let key in obj) {
        let item = obj[key];

        for (let i = 0; i < item.length; i++) {
            let cItem = item[i];
            let k = item[i].langKey?item[i].langKey:'common';

            // 给每一个数组对象新增一个翻译 lang 参数
            //!cItem['displayName'] && (cItem['displayName'] = i18n.t(k + '.' + cItem.lang));
        }
    }

    return obj;
})();

// console.log('_constMap = ', _constMap);

function _findAttr(type, sourceValue, cloudType){
    var result = _constMap[type].find(item=>{
        for(let i in item){
            if(item[i]==sourceValue){
                return true;
            }
        }
        return false;
    });
    return result?(result[cloudType]||result['value']) : _constMap[type][0].value;
}
export const constantMap = _constMap;
export const findAttr = _findAttr;