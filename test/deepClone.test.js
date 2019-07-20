import {expect} from 'chai';
import {deepClone} from '../src/index';

describe('deepClone 方法测试', () => {

	it('deepClone可以完全复制一个对象', () => {
		const source = {name: 'hello'};
		expect(deepClone(source)).to.be.deep.equal(source);
	});
    
	it('deepCloneclone的对象和原始对象不相同', () => {
		const source = {name: 'hello'};
		expect(deepClone(source)).to.be.not.equal(source);
	});
    
	it('deepClone可以复制null和undefined', () => {
		const source = {
			a: null,
			b: undefined
		};
		const cloneSource = deepClone(source);
		expect(cloneSource.a).to.be.a('null');
		expect(cloneSource.b).to.be.an('undefined');
	});
    
	it('deepClone可以复制数组', () => {
		const source = [1, 2, 3, 4];
		expect(deepClone(source)).to.be.deep.equal(source);
		expect(deepClone(source)).to.be.not.equal(source);
	});

	it('deepClone可以复制对象数组', () => {
		const source = [{count: 1}, {count: 2}, {count: 3}, {count: 4}];
		expect(deepClone(source)).to.be.deep.equal(source);
		expect(deepClone(source)).to.be.not.equal(source);
	});
    
	it('deepClone可以复制对象函数', () => {
		const source = {
			sayHello() {
				return 'hello world';
			}
		};
		const cloneSource = deepClone(source);
		expect(cloneSource).to.be.deep.equal(source);
		expect(cloneSource.sayHello()).to.be.equal(source.sayHello());
	});
    
	it('deepClone可以复制数组函数', () => {
		const fn = () => {
			return 'hello world';
		};
		const source = [fn, fn];
		const cloneSource = deepClone(source);
		expect(cloneSource).to.be.deep.equal(source);
		expect(cloneSource[0]()).to.be.equal(source[0]());
		expect(cloneSource[1]()).to.be.equal(source[1]());
	});
    
	it('deepClone可以复制日期', () => {
		const source = {createTime: new Date()};
		const cloneSource = deepClone(source);
		expect(cloneSource).to.be.deep.equal(source);
		expect(cloneSource.createTime.toString()).to.be.equal(source.createTime.toString());
	});
    
	it('deepClone可以复制正则', () => {
		const source = {rule: /rule/};
		const cloneSource = deepClone(source);
		expect(cloneSource).to.be.deep.equal(source);
		expect(cloneSource.rule.toString()).to.be.equal(source.rule.toString());
	});


	it('deepClone可以复制循环嵌套对象', () => {
		const source = {name: 'lili'};
		const source2 = {info: source, age: 12};
		source.info = source2;
		expect(deepClone(source)).to.be.deep.equal(source);
	});
    
	it('deepClone可以复制对象Symbol', () => {
		const _key = Symbol('key');
		const source = {name: 'lili', [_key]: 123};
		const cloneSource = deepClone(source);
		expect(cloneSource).to.be.deep.equal(source);
		const symbolArray = Object.getOwnPropertySymbols(cloneSource);
		expect(symbolArray).to.be.deep.equal([_key]);
		expect(cloneSource[_key]).to.be.equal(source[_key]);
	});


	it('deepClone可以复制任意复杂对象数组', () => {
		const _key = Symbol('key');
		const source = {
			[_key]: 123,
			name: 'lili',
			age: 18,
			isAdult: false,
			city: undefined,
			gender: null,
			friends: [
				{
					name: 'xiaohong',
					age: 19,
					isAdult: true,
				},
				{
					name: 'xiaolan',
					age: 17,
					isAdult: false,
				},
			],
			otherInfo: {
				hobby: [
					'唱',
					'跳',
					'rap',
					'篮球'
				],
				sayHello: () => {
					console.log('hello');
				},
				education: 'senior highschool',
			}
		};
		const source2 = {info: source, hobby: ['打游戏', '看电影'], sayHi() { console.log('hi'); }};
		source.info = source2;
		expect(deepClone(source)).to.be.deep.equal(source);
		expect(deepClone(source)).to.be.not.equal(source);
	});
    
});