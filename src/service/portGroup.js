import http from './instance'

//端口组首页数据
async function getPortGroupList () {
	// let params={port_id}
 //  let data = await http.post('portGroup/portGroupList',params)
let data=[
  [
    {
      number: '109',
      name: 'GROUP-1',
      types: '端口',
      groupMan: '端口A、端口B..',
      okRule: '规则A、规则B、规则V、...'
    },
    {
      number: '108',
      name: 'GROUP-2',
      types: '端口',
      groupMan: '端口c、端口d..',
      okRule: '规则c、规则d、规则e、...'
    } 
  ]
]
  return data 
}

//创建输入组数据
async function getCreatGroupList () {
  // let params={port_id}
 //  let data = await http.post('portGroup/portGroupList',params)
let data=[
  [
    {
      number: '109',
      name: 'GROUP-1',
      types: '端口',
      zgsl: '25GE',
      sl: '25GE',
      dlzt: 'down',
      dkms: 'off',
      zcd: '1518',
      pvid: 'pvid',
      zjx: '64',
      bckw: '12',
      nestvlan: 'disable',
      glzt: '启用',
      ssz: '无',
      syfxgz: '无',
      scfxgz: '无'
    },
    {
      number: '108',
      name: 'GROUP-2',
      types: '端口',
      zgsl: '25GE',
      sl: '25GE',
      dlzt: 'down',
      dkms: 'off',
      zcd: '1518',
      pvid: 'pvid',
      zjx: '64',
      bckw: '12',
      nestvlan: 'disable',
      glzt: '启用',
      ssz: '无',
      syfxgz: '无',
      scfxgz: '无'
    } 
  ]
]
  return data 
}

export default {
	getPortGroupList,
  getCreatGroupList
}