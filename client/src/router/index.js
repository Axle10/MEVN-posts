import Vue from 'vue'
import Router from 'vue-router'

// import pages
import index from '@/pages/index'
import posts from '@/pages/posts'
import PageNotFound from '@/pages/PageNotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
	},
	{
		path: '/posts',
		name: 'posts',
		component: posts,
		props: true
	},
	{
		path: '*',
		name: 'PageNotFound',
		component: PageNotFound
	}
  ],
  mode: 'history'
})
