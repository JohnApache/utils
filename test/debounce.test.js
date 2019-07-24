import {expect} from 'chai';
import {debounce} from '../src/index';

describe('debounce 防抖函数测试', () => {
	it('debounce第一个参数不是函数会抛出类型异常', () => {
		expect(debounce.bind(null, 'test')).to.throw(TypeError);
	});

	it('debounce 需要传入一个函数作为参数会返回一个debounce化函数', () => {
		expect(debounce(() => {})).to.be.a('function');
	});
    
	it('debounce 返回的函数 默认在100ms内不连续执行，只会执行一次', (done) => {
		let num = 1;
		const fn = () => { 
			num ++;
		};
		const debounceFn = debounce(fn);

		for(let i = 0; i < 1000; i++) {
			debounceFn();
		}
		expect(num).to.be.equal(1);
		setTimeout(() => {
			expect(num).to.be.equal(2);
			done();
		}, 150);
	});
    
	it('debounce 参数delay小于等于0的时候没有延迟直接执行', (done) => {
		let num = 1;
		const fn = () => { 
			num ++;
		};
		const debounceFn = debounce(fn, 0);

		for(let i = 0; i < 999; i++) {
			debounceFn();
		}
		expect(num).to.be.equal(1000);
		setTimeout(() => {
			expect(num).to.be.equal(1000);
			done();
		}, 150);
	});
});