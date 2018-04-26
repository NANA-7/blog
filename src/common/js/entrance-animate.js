/*
Vue 入场动画
思路：滑到指定高度为元素添加Class 执行相关动画
*/
export default(Vue, options = {})=> {

	if(!Array.prototype.remove){
		Array.prototype.remove = function(item){
			if(!this.length) return
			let index = this.indexOf(item);
			if( index > -1){
				this.splice(index,1);
				return this
			}
    	}
	}
	let listenList = [];
	// 判断是否加了
	const isEntranced = (ele, className) => {
		let res = ele.classList.contains(className);
		return res;
	}
	// 监听滚动事件
	const onListenScroll = () => {
		window.addEventListener('scroll', function() {
			let len = listenList.length;
			for (let i = 0; i < len; i++) {
				isAddClass(listenList[i]);
			}
		})
	}
	// 检查是否可以加Class
	const isAddClass = (item) => {
		if (!item) return;
		let ele = item.ele;
		let className = item.className;
		let top = ele.getBoundingClientRect().top;
		let winH = window.innerHeight;
		if (top <= winH) {
			ele.classList.add(className);
			listenList.remove(item);
			return true;
		} else {
			return false;
		}
	}
	// 指令的最终方法--核心方法
	/*
	addListener为指令的具体实现功能函数
	ele 是绑定元素
	binding是绑定参数*/
	const addListener = (ele, binding) => {
		// console.log(binding.value)
		// 绑定的Class
		let className = binding.value;
		// 如果已经加载过了，直接过滤
		if (isEntranced(ele, className)) return;
		let item = {
			ele: ele,
			className: className
		}
		// if (isAddClass(item)) return;
		listenList.push(item);
		onListenScroll();


	}
	Vue.directive('entrance', {
		//只需要在这两个钩子上执行
		bind: addListener,
		update: addListener
	})
}