//主框架，侧边栏
import consolePage from '@/views/console/consolePage/consolePage'

//系统配置首页
const list = () => import('@/views/console/system/list')
//系统配置修改
const modify = () => import('@/views/console/system/modify')

export default [
	{
		path: '/system',
		component: consolePage,
		children:[
			{
				path: 'list',
				component: list,
			},
			{
				path: 'modify',
				component: modify,
			}
		]
	}
]
