<template>
    <el-container direction="vertical" class="menu-conatiner">
        <!-- <div class="table-filter">
            <el-button type="primary" @click="edit()" class="float-right">创建</el-button>
        </div> -->
        <el-tree ref="tree" class="menu-tree" :props="props" :data="tree"   v-if="!treeHide" highlight-current>
            <div class="custom-tree-node" slot-scope="{ node, data }">
                <i class="node-icon" :class="[data.icon||'el-icon-folder']"></i>
                <span class="node-tit">{{ data.name }}</span>
                <el-dropdown class="control" trigger="click">
                    <el-button class="el-dropdown-link" icon="el-icon-more" @click.stop type="text"></el-button>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item><div @click="()=>{edit(data)}">编辑</div></el-dropdown-item>
                        <!-- <el-dropdown-item disabled><div @click="()=>{addChild(data)}">添加子菜单</div></el-dropdown-item> -->
                        <!-- <el-dropdown-item disabled><div @click="()=>{remove(data)}">删除</div></el-dropdown-item> -->
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </el-tree>
    </el-container>
</template>
<script>
import systemApi from '@/views/system/api';
import Pagination from '@/components/Pagination';
import FormDialog from '@/components/FormDialog';
import { deepClone } from '@/utils'
export default {
    components: { Pagination },
    data() {
        return {
            listQuery: {

            },
            props: {
                label: 'name',
                children: 'children',
                isLeaf: 'leaf'
            },
            tree: [],
            treeHide: false
        }
    },
    created() {
        this.loadNode();
    },
    methods: {
        loadNode() {
            systemApi.menu.tree().then(res => {
                this.tree = res.result
            })

        },
        edit(data) {
            FormDialog.show({
                title: data ? '编辑菜单' : '添加菜单',
                schema:[
                    {label:'菜单名称',prop: "name"},
                    {label:'图标',prop: "icon"},
                    {label:'路径',prop: "url"}
                ],
                rules:{
                    name:[
                        {required: true, message: '请输入菜单名称',trigger: 'blur'}
                    ]
                },
                api:{save: systemApi.menu.save,update: systemApi.menu.save},
                form: data,
                submit: this.submit
            })
        },
        submit(data) {
            this.refresh();
        },
        refresh() {
            this.loadNode();
        },
        addChild(data) {
        	FormDialog.show({
                title: i18n.t('route.menuCreate'),
                type: 'permission.auth.menu',
                form: {fatherId: data.id},
                submit: this.submit
            })
        },
        remove(data){
        	this.$confirm('确认删除菜单【'+data.menuName+'】吗','提示').then(res=>{
        		menu.remove([data.id]).then(res=>{
        			this.$message({type:'success',message:'删除成功',duration: 2000});
        			
        		})
        	}).catch(()=>{})
        }
    }
}
</script>
<style lang="scss" scoped>
.menu-conatiner{
	margin: 10px auto;
    width: 600px;
}
.menu-tree {
    margin: 10px 10px;

    /deep/ {
        .el-tree-node__content {
            height: 30px;
        }

        .custom-tree-node {
        	width: 100%;
            .node-icon {
                margin-right: 5px;
            }
            .control{
            	float: right;
            	.el-dropdown-link{
            		padding: 0 10px;
            		color: #666;
            	}
            }
        }
    }
}
</style>