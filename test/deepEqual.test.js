import {expect} from 'chai';
import {deepEqual} from '../src/index';
describe('deepEqual方法测试', () => {
	it('基本数据类型直接可以判断是否相等', () => {
		expect(deepEqual(1, 1)).to.be.ok;
		expect(deepEqual('hello', 'world')).to.be.not.ok;
		expect(deepEqual(false, true)).to.be.not.ok;
		expect(deepEqual(0, 1)).to.be.not.ok;
		expect(deepEqual(true, true)).to.be.ok;
	});
    
	it('数组可以判断内容是否相等', () => {
		expect(deepEqual([1, 2], [1, 2])).to.be.ok;
		expect(deepEqual(['hello'], ['world'])).to.be.not.ok;
	});
    
	it('带有NaN的数据也可以判断相等', () => {
		expect(deepEqual(NaN, NaN)).to.be.ok;
		expect(deepEqual(NaN, undefined)).to.be.not.ok;
	});
    
	it('可以判断日期数据是否相等', () => {
		expect(deepEqual(new Date('2017/11/1'), new Date('2017/11/1'))).to.be.ok;
		expect(deepEqual(new Date('2017/11/1'), new Date('2017/11/2'))).to.be.not.ok;
		expect(deepEqual(new Date('2017/11/1'), '2017/11/1')).to.be.not.ok;
	});
    
	it('可以判断正则数据是否相等', () => {
		expect(deepEqual(/rule/, /rule/)).to.be.ok;
		expect(deepEqual(/^rule$/, /rule/)).to.be.not.ok;
	});
    
	it('可以判断对象是否相等', () => {
		expect(deepEqual({a: 1}, {a: 1})).to.be.ok;
		expect(deepEqual({a: 1}, {a: '1'})).to.be.not.ok;
	});
    
	it('可以判断对象携带symbol数据是否相等', () => {
		const _key = Symbol();
		expect(
			deepEqual(
				{
					[_key]: 123, name: 'lll'
				}, {
					[_key]: 123, name: 'lll'
				}
			)
		).to.be.ok;
        
		expect(
			deepEqual(
				{
					[_key]: 123, name: 'lll'
				}, {
					[_key]: 345, name: 'lll'
				}
			)
		).to.be.not.ok;
        
		expect(
			deepEqual(
				{
					[_key]: 123, name: 'lll'
				}, {name: 'lll'}
			)
		).to.be.not.ok;
	});


	it('可以判断无限复杂数据对象是否相等', () => {
		const _key = Symbol('key');
		expect(
			deepEqual(
				{
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
						education: 'senior highschool',
					}
				},
				{
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
						education: 'senior highschool',
					}
				},
			)
		).to.be.ok;
	});

});
