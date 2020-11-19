<template>
	<el-table-column :prop="item.prop && item.prop.split(',')[0]" v-if="item.show"  :align="item.align"  sortable class-name="text-column" :fixed="fixed" :width='item.width'>        
		<template slot="header" slot-scope="scope" >
			{{item.header?item.header:item.label}}
		</template>
		<template slot-scope="scope" >
			<span v-if='!item.value'>
				<!-- <template v-if="!item.tooltip">
					<template v-for="(prop,index) in item.prop.split(',')">
						<span v-if="index>0"> / </span>
						<span v-html="$options.filters['filter'](scope.row[prop],item.filter,item.filterParams,type)" v-if="!item.tooltip"></span>
					</template>
				</template>
				<template v-if="item.tooltip"> -->
				<el-tooltip class="icon-after" effect="dark" placement="right" :open-delay="500" :tabindex="-1" :disabled="!item.tooltip || (item.prop.indexOf(',')<=-1) && !scope.row[item.prop]||scope.row[item.prop]==='--'">
					<div :class="typeof(item.break)==='undefined' || item.break?'break-word':''">
						<template v-for="(prop,index) in item.prop.split(',')">
							<span v-if="index>0">{{item.symbol == undefined? '/': item.symbol}}</span>
							<span v-html="$options.filters['filter'](scope.row[prop],item.filter,item.filterParams,type)"></span>
						</template>
					</div>
					<div slot="content" style="max-width: 400px; max-height: 300px;overflow-y: auto;" v-if="!(!item.tooltip || (item.prop.indexOf(',')<=-1) && !scope.row[item.prop]||scope.row[item.prop]==='--')">
                            <div v-if="typeof(item.tooltip) ==='object' || typeof(item.tooltip) ==='function'" v-html="getContent(item,scope.row)"></div>
                            <div v-else>
                                <template v-for="(prop,index) in item.prop.split(',')">
                                    <span v-if="index>0">{{item.symbol == undefined? '/': item.symbol}} </span>
                                    <span v-html="$options.filters['filter'](scope.row[prop],item.filter,item.filterParams,type)"></span>
                                </template>
                            </div>
					</div>
				</el-tooltip>
				<!-- </template> -->
			</span>
		    <span v-else v-html="typeof item.value ==='function'?item.value(scope.row):item.value"></span>
		</template>
    </el-table-column>
</template>
<script>
export default{
	props:{
		item:{
			type: Object,
			default:{}
		},
		type:{
			type: String,
			default:''
		},
		fixed:{
			type:String,
			default: undefined
		}
	},
	methods:{
        getContent(data,row){     
           if(data && typeof data.tooltip ==='object' && data.tooltip.content instanceof Function ){
           	return data.tooltip &&data.tooltip.content(this.item,row)
           }else{
               return data.tooltip
           }
            
            // data.prop.split(',').map((prop,index)=>{
            //    return `<template>
            //             <span>${data.symbol == undefined? '/': data.symbol} </span>
            //             <span>${this.$options.filters['filter'](row[prop],data.filter,data.filterParams,this.type)}</span>
            //         </template>`
                  
            // })
           
         }
	}
}
</script>
<style lang="scss" scoped>
	.break-word{
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		    outline: none;
	}
</style>
