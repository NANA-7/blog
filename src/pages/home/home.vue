<template>
    <div class="home">
    	<div class="motto">stay hungry stay foolish! 功成不息·坚守痴心</div>
    	<div class="links-wrapper">
    		<div class="title">时光机</div>
	    	<div class="links">
	    		<router-link class="link" to="/movie">
	    			<figure class="jazz">
	    				<img src="../../common/image/menu.jpeg">
	    				<figcaption class="txt">
	    					<h2>I</h2>
	    					<!-- <p>平凡简单</p> -->
	    				</figcaption>
	    			</figure>
	    		</router-link>
	    		<router-link class="link" to="/music">
	    			<figure class="jazz">
	    				<img src="../../common/image/menu.jpeg">
	    				<figcaption class="txt">
	    					<h2>AM</h2>
	    					<!-- <p>安于平凡</p> -->
	    				</figcaption>
	    			</figure>
	    		</router-link>
	    		<router-link class="link" to="/game">
	    			<figure class="jazz">
	    				<img src="../../common/image/menu.jpeg">
	    				<figcaption class="txt">
	    					<h2>WEB DESIGNER</h2>
	    					<!-- <p>真不简单</p> -->
	    				</figcaption>
	    			</figure>
	    		</router-link>
	    	</div>
    	</div>
    	<div class="article-wrapper">
    		<div class="title">最新文章</div>
    		<div v-if="list.length" class="articles">
    			<article-list :list="list"></article-list>
    		</div>
    		<div v-else="list.length" class="null">
    			<my-null :text="nullText"></my-null>
    		</div>
    		<div v-if="list.length < 10" class="paging">
    			<i class="btn prev el-icon-arrow-left"></i>
    			<i class="btn next el-icon-arrow-right"></i>
    		</div>
    	</div>
    </div>
</template>

<script type="text/javascript">
	import article from '@/components/article-list/article-list.vue';
	import nomore from '@/components/null/null.vue';
	export default {
		data() {
			return {
				nullText:'拖延症犯了，木有最新文章~',
				isEntrance: false,
				list: [
					{
						title: '这是文章标题啊啊啊',
						detail: '这是文章概述啊啊啊啊啊概述啊啊啊这是文章概述啊啊啊啊啊概述啊啊啊',
						time: '2017-07-22'
					},
					{
						title: '哈哈哈 假装是标题',
						detail: '简要概括一下啦啦啦',
						time: '2017-07-10'
					},
					{
						title: '这是文章标题啊啊啊',
						detail: '这是文章概述啊啊啊啊啊概述啊啊啊',
						time: '2017-07-22'
					},
					{
						title: '这是文章标题啊啊啊',
						detail: '这是文章概述啊啊啊啊啊概述啊啊啊',
						time: '2017-07-22'
					},
					{
						title: '这是文章标题啊啊啊',
						detail: '这是文章概述啊啊啊啊啊概述啊啊啊',
						time: '2017-07-22'
					},
					{
						title: '这是文章标题啊啊啊',
						detail: '这是文章概述啊啊啊啊啊概述啊啊啊',
						time: '2017-07-22'
					},
					{
						title: '这是文章标题啊啊啊',
						detail: '这是文章概述啊啊啊啊啊概述啊啊啊',
						time: '2017-07-22'
					},
					{
						title: '这是文章标题啊啊啊',
						detail: '这是文章概述啊啊啊啊啊概述啊啊啊',
						time: '2017-07-22'
					},
					{
						title: '这是文章标题啊啊啊',
						detail: '这是文章概述啊啊啊啊啊概述啊啊啊',
						time: '2017-07-22'
					},
					{
						title: '这是文章标题啊啊啊',
						detail: '这是文章概述啊啊啊啊啊概述啊啊啊',
						time: '2017-07-22'
					},
					{
						title: '这是文章标题啊啊啊',
						detail: '这是文章概述啊啊啊啊啊概述啊啊啊',
						time: '2017-07-22'
					},
					{
						title: '这是文章标题啊啊啊',
						detail: '这是文章概述啊啊啊啊啊概述啊啊啊',
						time: '2017-07-22'
					},
					{
						title: '这是文章标题啊啊啊',
						detail: '这是文章概述啊啊啊啊啊概述啊啊啊',
						time: '2017-07-22'
					}
				]
			}
		},
		mounted() {
			/*this.$nextTick(() => {
				window.addEventListener('scroll', this.onScroll);
			})*/
		},
		methods: {
		},
        components: {
            'article-list': article,
            'my-null': nomore
        }
	}
</script>

<style type="text/css" scoped>
	@import url(../../common/css/style.css);
	.home .title {
		margin-bottom: 15px;
	    color: #757575;
	    font-size: 16px;
	    font-weight: 400;
	    padding-bottom: 15px;
	    border-bottom: 1px dashed #ECECEC;
	}
	.motto {
		width: 100%;
		padding: 20px;
		border: 1px dashed #E6E6E6;
		color: #969696;
		background: rgba(251,251,251,.5);
		letter-spacing: 1px;
	}
	.links-wrapper{
		margin-top: 30px;
	}
	.links {
		display: flex;
	}
	.links .link{
		flex: 1;
		margin: 0 10px;
	}
	.links .link .jazz {
		height: 160px;
		background: linear-gradient(-45deg, #f3cf3f 0%,#f33f58 100%);
		position: relative;
		overflow: hidden;
		font-size: 0;
	}
	.links .link img {
		width: 100%;
		opacity: .9;
	}
	.links .link .jazz .txt::after,
	.links .link .jazz img,
	.links .link .jazz p,
	.links .link .jazz h2{
		transition: all 0.35s;
	}
	.links .link .jazz .txt {
		position: absolute;
	    top: 0;
	    left: 0;
	    width: 100%;
	    height: 100%;
	    padding: 2em;
	    color: #fff;
	    text-transform: uppercase;
	    font-size: 20px;
	    backface-visibility: hidden;
	    display: flex;
	    align-items: center;
	    text-align: center;
	}
	.links .link .jazz .txt::after {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-top: 1px solid #fff;
		border-bottom: 1px solid #fff;
		content: '';
		opacity: 0;
		transform: rotate3d(0,0,1,45deg) scale3d(1,0,1);
		transform-origin: 50% 50%;
	}
	.links .link .jazz h2,
	.links .link .jazz p {
		opacity: 1;
		transform: scale3d(0.8,0.8,1);
	}
	.links .link .jazz h2 {
		flex: 1;
		text-align: center;
		letter-spacing: 1px;
	}
	.links .link .jazz p {
		padding: 0.5em 2em;
		text-transform: none;
		font-size: 0.85em;
		opacity: 0;
	}
	.links .link .jazz:hover img {
		opacity: 0.7;
		transform: scale3d(1.05,1.05,1);
	}
	.links .link .jazz:hover .txt::after {
		opacity: 1;
		transform: rotate3d(0,0,1,45deg) scale3d(1,1,1);
	}
	.links .link .jazz:hover h2,
	.links .link .jazz:hover p {
		opacity: 1;
		transform: scale3d(1,1,1);
	}

	@media screen and (max-width: 860px) {
		.links-wrapper {
			display: none;
		}
	}
	.article-wrapper {
		margin-top: 80px;
	}
	.article-wrapper .paging {
		margin: 80px 0;
		text-align: center;
	}
	.article-wrapper .paging .btn{
		display: inline-block;
		padding: 10px;
		margin: 10px;
		border-radius: 50%;
		font-size: 14px;
		color: #d8d8d8;
		border: 2px solid #ddd;
		transition: all .5s ease;
		cursor: pointer;
	}
	.article-wrapper .paging .btn:hover {
		color: #fff;
		background-color: #62ceb7;
		border-color: #62ceb7;
	}
</style>