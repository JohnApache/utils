import * as tc from '../TypeChecker';

const DELAY_TIME = 100;



/**
 * 函数执行防抖
 * @param {function} fn 需要防抖的函数
 * @param {number} delay 防抖延迟时间
 */
const Debounce = (fn, delay = DELAY_TIME ) => {
	if(!tc.isFunction(fn)) throw new TypeError('params fn is a function');
	let timer;
	return () => {
		clearTimeout(timer);
		if(delay <= 0) return fn && fn();
		timer = setTimeout(() => {
			fn && fn();
		}, delay);
	};
};

export default Debounce;