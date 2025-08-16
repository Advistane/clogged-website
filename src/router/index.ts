import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/pages/Home.vue';
import CollectionLogTabs from '@/components/CollectionLogTabs.vue';
import Groups from '@/pages/Groups.vue';
const routes = [
	{ path: '/clog/:username', component: CollectionLogTabs },
	{ path: '/groups', component: Groups },
	{ path: '/', component: Home },
	
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})
export default router;