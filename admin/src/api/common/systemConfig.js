/**
 * @description     系统配置接口
 *
 * @author
 * @email
 * @phone
 * @create          2020-08-6 11:00
 * */

import axios from '../index';


export function getSysProperty(group){
    return axios.get('/sysproperties/getSysProperty/'+group);
}
export function delSysProperty(group){
    return axios.delete('/sysproperties/getSysProperty/'+group);
}
export function addSysProperty(group){
    return axios.post('/sysproperties/getSysProperty/'+group);
}

export function updateSysProperty(group){
    return axios.put('/sysproperties/getSysProperty/'+group);
}

export function getSingleSysProperty(group,key){
    return axios.get('/sysproperties/getSysProperty/'+group+'/'+key);
}
export function delSingleSysProperty(group,key){
    return axios.delete('/sysproperties/deleSysProperty/'+group+'/'+key);
}

export function addSingleSysProperty(body){
    return axios.post('/sysproperties/setSysProperty',body);
}

export function updateSingleSysProperty(body){
    return axios.put('/sysproperties/setSysProperty/'+body.group+'/'+body.key,body);
}


export default {
    getSysProperty,
    delSysProperty,
    addSysProperty,
    updateSysProperty,
    getSingleSysProperty,
    delSingleSysProperty,
    addSingleSysProperty,
    updateSingleSysProperty,
}