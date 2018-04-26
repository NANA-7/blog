<template>
    <div class="site-wrapper">
    	<h2 class="title">关于6++的博客</h2>
    	<div class="intro">
    		<p>此网站</p>
    		<p>前端展示：Vue + Element UI(按需引入)</p>
    		<p>后端管理：Node + Express + MongoDB + Markdown</p>
    		<p>域名购买：阿里云</p>
    		<p>服务器购买：阿里云</p>
    		<p>如果你也感兴趣，或者想建个相同的网站可阅读以下文章...</p>
    	</div>
    	<div class="cut-line"><hr /></div>
    	<div class="list">
    		<div v-if="list.length" class="articles">
    			<article-list :list="list"></article-list>
    		</div>
    		<div v-else="list.length" class="null">
    			<my-null :text="nullText"></my-null>
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
					}
				]
			}
		},
		components: {
            'article-list': article,
            'my-null': nomore
        }
	}
</script>

<style type="text/css" scoped>
	.site-wrapper {

	}
	.site-wrapper .title {
		height: 50px;
		font-size: 22px;
		color: #969696;
		font-weight: normal;
	}
	.site-wrapper .intro p {
		color: #969696;
		line-height: 2;
	}
	.cut-line {
		margin: 40px auto;
		text-align: center;
	}
</style>