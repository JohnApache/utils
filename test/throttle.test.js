import {expect} from 'chai';
import {throttle} from '../src/index';
describe('throttle节流方法测试', () => {
	it('throttle第一个参数不是函数会抛出类型异常', () => {
		expect(throttle.bind(null, 'test')).to.throw(TypeError);
	});

	it('throttle 需要传入一个函数作为参数会返回一个throttle化函数', () => {
		expect(throttle(() => {})).to.be.a('function');
	});
    
	it('throttle 返回的函数 默认在100ms内只会执行一次', (done) => {
		let num = 1, count = 0;
		const fn = () => { 
			num ++;
		};
		const throttleFn = throttle(fn);

		let timer = setInterval(() => {
			count ++;
			throttleFn();
			if(count > 8) {
				expect(num).to.be.equal(2);
				done();
				clearInterval(timer);
			}
		}, 10);
	});
    

	it('throttle 默认返回的函数 每100ms间隔会执行一次', (done) => {
		let num = 1, count = 0;
		const fn = () => { 
			num ++;
		};
		const throttleFn = throttle(fn);

		let timer = setInterval(() => {
			count ++;
			throttleFn();
			if(count === 5) {
				expect(num).to.be.equal(2);
			}
			if(count === 15) {
				expect(num).to.be.equal(3);
			}
			if(count === 25) {
				expect(num).to.be.equal(4);
				done();
				clearInterval(timer);
			}
		}, 10);
	});
    
	it('throttle 可以修改delay 间隔', (done) => {
		let num = 1, count = 0;
		const fn = () => { 
			num ++;
		};
		const throttleFn = throttle(fn, 200);

		let timer = setInterval(() => {
			count ++;
			throttleFn();
			if(count === 5) {
				expect(num).to.be.equal(2);
			}
			if(count === 15) {
				expect(num).to.be.equal(2);
			}
			if(count === 25) {
				expect(num).to.be.equal(3);
				done();
				clearInterval(timer);
			}
		}, 10);
	});

	it('throttle delay间隔小于等于0的时候直接执行函数 没有延迟', () => {
		let num = 1;
		const fn = () => { 
			num ++;
		};
		const throttleFn = throttle(fn, 0);
        
		for(let i = 0; i < 99; i++) {
			throttleFn();
		}
		expect(num).to.be.equal(100);
	});

});