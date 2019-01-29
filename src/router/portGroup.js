//主框架，侧边栏
import consolePage from '@/views/console/consolePage/consolePage'
//端口组主页面导航
const portGroupIndex = () => import('@/views/console/portGroup/portGroup')
//输入组
const inputGroup = () => import('@/views/console/portGroup/inputGroup')
//输出组
const outGroup = () => import('@/views/console/portGroup/outGroup')
//创建输入组
const creatInput = () => import('@/views/console/portGroup/creatInput')
//编辑端口组
const editInputGroup = () => import('@/views/console/portGroup/editInputGroup')
//端口组详情
const detailInputGroup = () => import('@/views/console/portGroup/detailInputGroup')
//创建输出组
const creatOut = () => import('@/views/console/portGroup/creatOut')
//编辑输出组
const editOutGroup = () => import('@/views/console/portGroup/editOutGroup')
//输出组详情页
const detailoutGroup = () => import('@/views/console/portGroup/detailoutGroup')

export default [{
	path: '/portGroup',
	component: consolePage,
	children: [
			{
			path: 'portGroupIndex',
			name:'portGroupIndex',
			component: portGroupIndex,
			children: [
				{
					path: 'inputGroup',
					name:'inputGroup',
					component: inputGroup
				},
				{
					path: 'outGroup',
					name:'outGroup',
					component: outGroup
				}
			]
		},
		{
			path: 'creatInput',
			name:'creatInput',
			component: creatInput
		},
		{
			path: 'editInputGroup',
			name:'editInputGroup',
			component: editInputGroup
		},
		{
			path: 'detailInputGroup',
			name:'detailInputGroup',
			component: detailInputGroup
		},
		{
			path: 'creatOut',
			name:'creatOut',
			component: creatOut
		},
		{
			path: 'editOutGroup',
			name:'editOutGroup',
			component: editOutGroup
		},
		{
			path: 'detailoutGroup',
			name:'detailoutGroup',
			component: detailoutGroup
		}
	]
}]
