<template>
    <div class="null">
    	<img src="./1.jpg">
    	<p>{{text}}</p>
    </div>
</template>

<script type="text/javascript">
	export default {
		props: {
			text: {
				type: String,
				default: '这里空空如也~'
			}
		}
	}
</script>

<style type="text/css" scoped>
	.null {
		text-align: center;
	}
	.null img{
		max-width: 100%;
	}
	.null p {
		margin-top: 20px;
		font-size: 14px;
		color: #666;
	}
</style>