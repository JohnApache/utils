import * as tc from '../TypeChecker';
const DELAY_TIME = 100;
/**
 * 函数节流
 * @param {function} fn 需要节流的函数
 * @param {number} delay 节流延迟时间
 */
const Throttle = (fn, delay = DELAY_TIME) => {
	if(!tc.isFunction(fn)) throw new TypeError('params fn is a function');
	let lock = false;
	return () => {
		if(lock) return;
		lock = true;
		fn && fn();
		if(delay <= 0) {
			lock = false;
			return; 
		}
		setTimeout(() => {
			lock = false;
		}, delay);
	};
};

export default Throttle;