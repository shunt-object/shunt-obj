//主框架，侧边栏
import consolePage from '@/views/console/consolePage/consolePage'
//端口组主页面导航
const portGroup = () => import('@/views/console/portGroup/portGroup')
//输入组
const inputGroup = () => import('@/views/console/portGroup/inputGroup')
//输出组
const outGroup = () => import('@/views/console/portGroup/outGroup')
//创建输入组
const creatInput = () => import('@/views/console/portGroup/creatInput')
//编辑端口组
const editPortGroup = () => import('@/views/console/portGroup/editPortGroup')

export default [{
	path: '/consolePage',
	name:'consolePage',
	component: consolePage,
	children: [
			{
			path: 'portGroup',
			name:'portGroup',
			component: portGroup,
			children: [
				{
					path: 'inputGroup',
					name:'consolePage',
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
			path: 'editPortGroup',
			name:'editPortGroup',
			component: editPortGroup
		}
	]
}]
