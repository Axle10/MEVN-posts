import Vue from 'vue'
import Router from 'vue-router'

// import pages
import index from '@/pages/index'
import PageNotFound from '@/pages/PageNotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: index
	},
	{
		path: '*',
		name: 'PageNotFound',
		component: PageNotFound
	}
  ],
  mode: 'history'
})
