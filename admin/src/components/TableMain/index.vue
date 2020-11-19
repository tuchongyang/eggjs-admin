<template>
    <div class="table-container" @mousemove="onMousemove" @mousedown="onMousedown" @mouseup="onMouseup">
        <TableColumnFilter v-if="!hiddenColumnFilter" :items="filterColumns" ></TableColumnFilter>
        <el-table ref="multipleTable" class="hyperone-table table" v-bind="$attrs" border :data="list" fit style="width: 100%"  tooltip-effect="dark" highlight-current-row v-loading="loading" @row-click="onRowClick" @row-contextmenu="onRowContextmenu" @selection-change="handleSelectionChange" v-if="currentModel">
            <el-table-column type="selection" width="55" class-name="hide-column" v-if="selection"></el-table-column>
            <el-table-column type="index" v-if="index" :label="$t('table.id')" fixed="left" width="55"></el-table-column>
            <!--表格列-->
            <template v-if="columnItems.length">
                <template v-for="(item,index) in columnItems">
                    <el-table-column v-if="item.children && item.children.length" :label="item.label" :fixed="index==0?'left':undefined" :key="index">
                        <template v-for="(citem,i) in item.children" >
                            <TableItem :item="citem" :key="i" v-if="citem.show" :type="type"></TableItem>    
                        </template>
                    </el-table-column>
                    <template  v-else>
                        <TableItem :item="item" v-if="item.show" :key="index" :type="type" :fixed="index == 0 ? 'left' : (item.fixed || undefined)"></TableItem>
                    </template>
                </template>
                <el-table-column label="操作" :width="currentModel.config && currentModel.config.actionWidth" fixed="right" v-if="$scopedSlots.action">
                    <template slot-scope="scope">
                        <slot name="action" :row="scope.row"></slot>
                    </template>
                </el-table-column>
            </template>
            <template slot="empty" v-if="!loading"><slot name="empty"></slot></template>
            
        </el-table>
        <div class="table-control" v-if="selection || $scopedSlots.control">
            <span class="select-tip" v-if="selection">已选 {{multipleSelection.length}} 条</span>
            <slot name="control" :multipleSelection="multipleSelection"></slot>
        </div>
		<div style="overflow: hidden;" v-if='!simplePage'>
			<div class="pull-right currentPage" v-if="total > listQuery.pageSize && !simplePage && removePager"> 当前第 {{listQuery.pageIndex}} 页</div>
			<div class="pull-right">
				<pagination :total="total" :layout="layout" v-if='!simplePage' :small="paginationSmall"  :pageIndex.sync="listQuery.pageIndex" :limit.sync="listQuery.pageSize" @pagination="getList" />
			</div>
		</div>
		<PagerSelf v-if="total > 0 &&simplePage" :total="total" :pageIndex.sync="listQuery.index" :pageSize.sync="listQuery.pageSize" @pagination="getList"></PagerSelf>
    </div>
</template>
<script>
    import Pagination from '@/components/Pagination';
    import TableColumnFilter from '@/components/TableColumnFilter'
import {mapGetters} from 'vuex';
import {deepClone} from '@/utils'
import TableItem from './TableItem';
import PagerSelf from '@/components/PagerSelf';
import Model from '@/model'
export default {
    components:{Pagination,TableColumnFilter,TableItem,PagerSelf},
    props:{
        //对应Model
        type: '',
        listQuery: {},
        
        removePager:{
            type:Boolean,
            default:false
        },
        //是否隐藏定制表头
        hiddenColumnFilter:false,
        selection: false,
        index:false,
        disableColumn:'',
		paginationSmall: false,

        isDataFromApi:{
            type: Boolean,
            default:true,//默认为true
        },
        //来着非api的table显示数据
        listFromParent: {
            type: Array,
            default(){return []}
        },
		//显示PagerSelf或者pagination  默认：pagination
		simplePage:{
            type: Boolean,
            default:false,
        },
		//控制 loading 
		loadingType:{
			type: Boolean,
			default:true,
		},
		

    },
    computed:{
        currentModel(){
            const model = Model;
            return eval('model.'+this.type);
        },
    },
    watch:{
		type(){
			this.getColumns();
		},

        // listFromParent(val){
        //     this.init();
        // }
    },
    data(){
        return {
            list:[],
            layout:'',
            loading: false,
            multipleSelection:[],
            columnItems:[],
            filterColumns:[],
            total: 0,
            i:1,
            mouseEvent:{
                sx:0, sy:0,ex: 0, ey:0,moveable:false,isMoved:false//是否移动了，如果移动了，就阻止click事件
            }
        }
    },
    created(){
        this.init()
    },

    methods:{
		init(){
			if(this.currentModel){
			    if(!this.isDataFromApi){
			        if(!this.listFromParent.length){
			            return this.list = [];//外头也可能传空
			        }
			        this.list = this.listFromParent;
			        // console.log('listFromParent',this.list);
			    }else{
			        this.getList();//默认从api
			    }
			}
            this.getColumns();
            if(this.removePager){
                this.layout = 'total, sizes, prev, next'
            }else{
                this.layout = 'total, sizes, prev, pager, next, jumper'
            }
		},
        getList(options){
            this.$emit('before')
          var params = this.getParams();
          this.loading = options&&typeof(options.loading)!=='undefined'?options.loading:true;
          this.currentModel.api.list(params).then(res=>{
            this.loading = false;

            var listKey = this.currentModel.config && this.currentModel.config.listKey ?this.currentModel.config.listKey:'result.data',
                totalKey = this.currentModel.config && this.currentModel.config.totalKey ? this.currentModel.config.totalKey:'result.total';

            this.list = eval('res.'+listKey);
            this.total = eval('res.'+totalKey)||0;
            if(this.currentModel.itemsFilter){
              this.list = this.list.map(this.currentModel.itemsFilter)
            }

            this.$emit('update:total',this.total);
            this.$emit('update:list',this.list);
            this.$emit('success',this.list);

          }).catch((err)=>{
            this.loading = false;
          })

        },
        getParams(){
            var params = deepClone(this.listQuery);
            for(let i in params){
                var item = params[i]
                if(typeof item === 'object'){
                    if(typeof item.tableKey === 'object' && item.tableKey.length){
                        this.$set(params,item.tableKey[0],item.value[0] || '')
                        this.$set(params,item.tableKey[1],item.value[1] || '')
                        delete params[item.value]
                    }else{
                        params[item.tableKey || i]=item.value;
                    }
                    item.tableKey && item.tableKey!==i && (delete params[i]);
                   
                }
            }

            return params
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
            this.$emit('selection-change',val)
        },
        query(){
            this.listQuery.pageIndex=1;
            this.list = [];
            this.getList();
        },
        refresh(){
            this.list = [];
            this.getList();
        },
        onRowClick(row, column, event){
            if(!this.mouseEvent.isMoved){
                this.$emit('row-click',row,column,event)
            }
        },
        onRowContextmenu(row, column, event){
            this.$emit('row-contextmenu',row,column,event)
        },
        getColumns(){
            let result = [];
            if(this.currentModel){
                let items = this.currentModel.items;
                if(this.currentModel.getItems && this.currentModel.getItems instanceof Function){
                    items = this.currentModel.getItems()
                }
                result = items.filter(item=>{
                    if(item.children){
                        item.children = item.children.filter(citem=>!this.disableColumn || this.disableColumn.split(',').indexOf(citem.prop)<=-1)
                    }
                    return !this.disableColumn || this.disableColumn.split(',').indexOf(item.prop)<=-1
                })
            }
            // console.log('rrr,',result)
            this.columnItems = result

            // console.log('result=======',result);
            var result1 = []
            this.columnItems.forEach(item=>{
                if(item.children && item.children.length){
                    item.children.forEach(citem=>{
                        result1.push(citem)
                    })
                }else{
                    result1.push(item)
                }
            })
            this.filterColumns = result1

        },
        onMousedown(e){
            this.mouseEvent.moveable=true;
            this.mouseEvent.isMoved=false;
            this.mouseEvent.sx=this.mouseEvent.ex=e.pageX;
            this.mouseEvent.sy=this.mouseEvent.ey=e.pageY;
        },
        onMousemove(e){
            if(this.mouseEvent.moveable){
                this.mouseEvent.ex=e.pageX;
                this.mouseEvent.ey=e.pageY;
            }
        },
        onMouseup(){
            this.mouseEvent.moveable=false;
            //横坐标移动超过10px，
            if(Math.abs(this.mouseEvent.ex-this.mouseEvent.sx)>=5){
                this.mouseEvent.isMoved=true;
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.table-container{
    position: relative;
    /deep/{
        .table-column-filter{
            // margin-top: -30px;
            position: absolute;
            left: 100%;
            top: 7px;
            margin-left: 3px;
        }
    }
    .break-word{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
}
.currentPage{
	margin-top: 25px;
	font-size: 12px;
	color: #808080;
}

.hyperone-table {
    z-index: 10;
    /deep/{
        .el-table__body-wrapper{
            &::-webkit-scrollbar{
                height:10px;
            }
            &::-webkit-scrollbar-thumb{
                border-radius: 15px;
            }
        }
        

    }
    &.el-table--scrollable-x{
        /deep/{
            .el-table__fixed, .el-table__fixed-right{
                height: auto!important;
                bottom:10px;
            }
        }
    }
}

</style>
