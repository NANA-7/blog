import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/home/home';
/*import About from '@/pages/about/about';
import Game from '@/pages/life/game/game';
import Movie from '@/pages/life/movie/movie';
import Music from '@/pages/life/music/music';
import Sport from '@/pages/life/sport/sport';*/
// import Site from '@/pages/site/site';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
    	// 关于我
    	path: '/about',
    	component: resolve => require(['@/pages/about/about.vue'], resolve)
    },
    {
    	// 游戏
    	path: '/game',
    	component: resolve => require(['@/pages/life/game/game.vue'], resolve)
    },
    {
    	// 电影
    	path: '/movie',
    	component: resolve => require(['@/pages/life/movie/movie.vue'], resolve)
    },
    {
    	// 音乐
    	path: '/music',
    	component: resolve => require(['@/pages/life/music/music.vue'], resolve)
    },
    {
    	// 运动
    	path: '/sport',
    	component: resolve => require(['@/pages/life/sport/sport.vue'], resolve)
    },
    {
    	// 关于本站
    	path: '/site',
    	component: resolve => require(['@/pages/site/site.vue'], resolve)
    },
    {
    	// 优美图
    	path: '/image',
    	component: resolve => require(['@/pages/images/image.vue'], resolve)
    }
  ]
})
