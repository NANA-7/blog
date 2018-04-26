<template>
    <div class="header">
        <!-- 以860为分界线 -->
        <!-- 860以上的样式 -->
        <div class="max-wrapper">
        	<div class="header-wrapper">
        		<div class="header-cont">
	        		<!-- <div class="logo"></div> -->
	        		<div class="search">
	        			<i class="el-icon-search"></i>
	        		</div>
	        		<div class="nav">
	        			<el-menu 
	        				class="my-el-menu" 
	        				mode="horizontal" 
	        				:router="true">
							<el-menu-item index="home">首页</el-menu-item>
							<el-submenu index="1">
								<template slot="title">我的生活</template>
								<el-menu-item index="movie">电影</el-menu-item>
								<el-menu-item index="music">音乐</el-menu-item>
								<el-menu-item index="sport">健身</el-menu-item>
								<el-menu-item index="game">游戏</el-menu-item>
							</el-submenu>
							<el-submenu index="2">
								<template slot="title">永不止步</template>
								<el-menu-item index="movie">我的职业</el-menu-item>
								<el-menu-item index="music">一些领悟</el-menu-item>
								<el-menu-item index="music">技术杂谈</el-menu-item>
							</el-submenu>
							<el-menu-item index="image">优美图</el-menu-item>
							<el-menu-item index="site">关于本站</el-menu-item>
							<el-menu-item index="about">关于我</el-menu-item>
						</el-menu>                                       
	        		</div>
        		</div>
        	</div>
        </div>
        <!-- 860以下的样式 -->
        <div class="min-wrapper">
        	<!-- <div class="logo"></div> -->
        	<div class="nav">
				<el-menu 
					class="my-el-menu" 
					mode="vertical" 
					:collapse="true"
					:router="true">
					<el-menu-item index="home">首页</el-menu-item>
					<el-submenu index="null">
					<template slot="title">我的生活</template>
						<el-menu-item index="movie">电影</el-menu-item>
						<el-menu-item index="music">音乐</el-menu-item>
						<el-menu-item index="game">游戏</el-menu-item>
						<el-menu-item index="sport">健身</el-menu-item>
					</el-submenu>
					<el-menu-item index="image">优美图</el-menu-item>
					<el-menu-item index="site">关于本站</el-menu-item>
					<el-menu-item index="about">关于我</el-menu-item>
				</el-menu>                                       
			</div>
        </div>
    </div>
</template>

<script type="text/javascript">
	export default {}
</script>

<style type="text/css">
	.min-wrapper{
		display: none;
	}
	.max-wrapper{
		width: 100%;
		height: 100px;
		background-color: #fff;
		border-bottom: 1px solid #f5f5f5;
	}
	.max-wrapper .header-cont{
		max-width: 800px;
		height: 50px;
		margin: auto;
		padding: 25px 0;
	}
	.max-wrapper .header-cont .logo{
		width: 264px;
		height: 50px;
		background:url('../../common/image/logo.png') no-repeat center center;
		background-size: 264px 50px;
		float: left;
	}
	.max-wrapper .header-cont .nav{
		height: 50px;
		line-height: 50px;
		float: right;
	}

	.nav .my-el-menu{
		background-color: transparent;
	}
	.nav .my-el-menu>.el-menu-item, 
	.nav .my-el-menu .el-submenu__title{
		height: 50px;
		line-height: 50px;
		color: #404040;
		border: none;
		border-color: transparent;
		font-size: 16px;
	}
	.nav .my-el-menu .el-submenu.is-active .el-submenu__title{
		border: none;
		border-color: transparent;
	}
	.max-wrapper .nav .my-el-menu .el-submenu .el-menu-item.is-active{
		color: #404040;
	}
	.nav .my-el-menu .el-menu-item:hover, 
	.nav .my-el-menu .el-submenu__title:hover{
		background-color: transparent;
		border-bottom: none;
		border-color: transparent;
		color: #62ceb7;
	}
	.nav .my-el-menu>.el-submenu:hover .el-submenu__title {
		border: none;
		border-color: transparent;
	}
	.max-wrapper .header-cont .search{
		height: 50px;
		line-height: 50px;
		margin-left: 20px;
		float: right;
		font-size: 24px;
		color: #e2e2e2;
		cursor: pointer;
	}
	@media screen and (max-width: 860px) {
		.max-wrapper {
			display: none;
		}
		.min-wrapper {
			width: 100%;
			height: 100%;
			display: block;
			background-color: #344258;
			position: fixed;
			top: 0;
			left: 0;
		}
		.min-wrapper .nav{
			width: 250px;
			margin-top: 50px;
		}
		.nav .my-el-menu>.el-menu-item, 
		.nav .my-el-menu .el-submenu__title {
			color: #fff;
		}
		.el-submenu .el-menu{
			background-color: transparent;
		}
		.nav .my-el-menu .el-submenu .el-menu-item{
			color: #9CACC5;
		}
		.nav .my-el-menu .el-submenu .el-menu-item:hover{
			color: #62ceb7; 
		}
	}
</style>