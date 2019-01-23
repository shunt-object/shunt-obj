//主框架，侧边栏
import consolePage from '@/views/console/consolePage/consolePage'

//输入组
const list = () => import('@/views/console/portGroup/list')

const inputGroup = () => import('@/views/console/portGroup/inputGroup')

export default [{
	path: '/consolePage',
	name:'consolePage',
	component: consolePage,
	children: [{
		path: '/consolePage/portGroup/',
		name:'list',
		component: list,
		children: [{
			path: '/consolePage/portGroup/inputGroup',
      name:'consolePage',
			component: inputGroup
		}]
	}]
}]
