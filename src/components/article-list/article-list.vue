<template>
    <div class="article-item">
    	<article 
			class="article" 
			v-for="item in list" 
			v-entrance="'entrance'">
			<router-link class="article-link" to="/home">
				<div class="img"><img src="../../common/image/nana.jpg"></div>
				<div class="cont-wrapper">
					<div class="cont">
						<h2 class="article-title">{{item.title}}</h2>
						<div class="article-time"><i class="el-icon-time"></i>{{item.time}}</div>
						<div class="article-time"><i class="el-icon-edit"></i>电影</div>
						<div class="article-detail">{{item.detail}}</div>
						<div class="article-more"><i class="el-icon-more"></i></div>
					</div>
				</div>
			</router-link>
			<div class="line"></div>
		</article>
    </div>
</template>

<script type="text/javascript">
	export default {
		props:{
			list: {
				type:Array
			}
		}
	}
</script>

<style type="text/css" scoped>
	@import url(../../common/css/style.css);
	.article-item .article{
		width: 100%;
		margin-bottom: 20px;
		padding: 10px;
		cursor: pointer;
	}
	.article .article-link {
		display: flex;
	}
	.article-item .article .img {
		width: 150px;
		height: 150px;
		margin-right: 20px;
		padding: 2px;
		border: 1px solid #DADADA;
		overflow: hidden;
		transition: all .4s ease;
	}
	.article-item .article .img img{
		width: 100%;

	}
	.article-item .article .img:hover img{
		animation: tada 1s .2s ease both;
	}
	.article-item .article .cont-wrapper {
		flex: 1;
		height: 150px;
	}
	.article-item .article .cont {
		width: 100%;
		height: 100%;
		position: relative;
	}
	.article-item .article .article-title {
		width: 70%;
		height: 50px;
		line-height: 50px;
		font-size: 20px;
		font-weight: 400;
		white-space: nowrap;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    color: #504E4E;
	    transition: all .4s ease;
	}
	.article-item .article .article-title:hover {
		color: #62ceb7;
	}
	.article-item .article .article-detail {
		height: 90px;
		overflow: hidden;
		font-size: 14px;
		color: #232323;
		letter-spacing: 1px;
		line-height: 30px;
	}
	.article-item .article .article-time {
		/*position: absolute;
	    right: 0;
	    top: 0;*/
	    /*line-height: 50px;*/
	    font-size: 12px;
	    color: #989898;
	    letter-spacing: 1px;
	    /*vertical-align: middle;*/
	}
	.article-item .article .article-time i {
		margin-right: 5px;
	}
	.article-item .article .article-more {
		/*width: 32px;
		height: 32px;*/
		color: #62ceb7;
		position: absolute;
		right: 0;
		bottom: 0px;
		font-size: 16px;
		/*background: url(./flower.png);
		background-size: 32px 32px;*/
		transition: all 2s ease;
	}
	.article-item .article .article-more:hover {
		animation: rotate 2s infinite;
	}
	@keyframes rotate {
		0% {
			transform:rotate(0deg) skew(0deg) scale(1);
			/*right: 0;*/
		}
		100% {
			transform:rotate(360deg) skew(0deg) scale(1);
			/*right: 20px;*/
		}
	}
	.article-item .article .line {
		width: 30%;
		height: 1px;
		background-color: #efefef;
		margin: 20px auto 0;
	}
	@media screen and (max-width: 860px) {
		.article-item .article .cont-wrapper {
			height: 100px;
		}
		.article-item .article .img {
			width: 100px;
			height: 100px;
		}
		.article-item .article .article-detail {
			display: none;
		}
		.article-item .article .article-more {
			display: none;
		}
	}
</style>