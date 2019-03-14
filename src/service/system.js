import http from './instance'

//获取系统设置数据
async function getSystemList () {
	// let params={port_id}
 //  let data = await http.post('portGroup/portGroupList',params)
  let data=JSON.parse(localStorage.getItem("key"))
  return data 
}

//修改系统设置数据
async function modifySystemList (params) {
  // let params={port_id}
 //  let data = await http.post('portGroup/portGroupList',params)
  let data=params
  localStorage.setItem("key",JSON.stringify(data))
  return {code:0} 
}

export default {
	getSystemList,
  modifySystemList
}