import {expect} from 'chai';
import {omitValues} from '../src/index';

describe('omitValues方法测试', () => {
	it('omitValues方法参数第二个不是对象会抛出异常', () => {
		expect(omitValues.bind(false, '12', 'age')).to.throw(TypeError);
	});

	it('omitValues方法参数没有传入要删除值直接返回原对象结构，地址不同', () => {
		const souce = { name: 'lili' };
		const result = omitValues(false, souce);
		
		expect(result).to.be.not.equal(souce);
		expect(result).to.be.deep.equal(souce);
	});
    
	it('omitValues方法可以删除对象指定值并返回删除后的结果', () => {
		expect(omitValues(false, {
			name: 'lili',
			age: 18,
			some: 18
		}, 18)).to.be.deep.equal({
			name: 'lili',
		});
	});
	
	
	it('omitValues方法可以删除对象指定的symbol值并返回删除后的结果', () => {
		const _key1 = Symbol('key1');
		const _key2 = Symbol('key2');

		const result = omitValues(false, {
			name: 'lili',
			[_key1]: 123,
			[_key2]: 333
		}, 123);

		
		expect(result).to.be.deep.equal({
			name: 'lili',
			[_key2]: 333
		});

		expect(result[_key1]).to.be.a('undefined');
		expect(result[_key2]).to.be.equal(333);

		// 开启深度比较对象
		const result2 =  omitValues(true, {
			name: 'lili',
			[_key1]: {a: 1},
			[_key2]: {a: 2}
		}, {a: 2});

		expect(result2).to.be.deep.equal({
			name: 'lili',
			[_key1]: {a: 1}
		});

		expect(result2[_key1]).to.be.deep.equal({a: 1});
		expect(result2[_key2]).to.be.a('undefined');

	});
    

	it('omitValues方法可以删除多个对象指定值并返回删除后的结果', () => {
		expect(omitValues(false, {
			name: 'lili',
			age: 18,
			some: 18,
			info: null
		}, 'lili', null)).to.be.deep.equal({
			age: 18,
			some: 18,
		});
	});
    
	it('omitValues方法可以比较复杂数据类型的地址删除复杂数据类型', () => {
		const info = {
			gender: 1,
			edu: 'senior'
		};

		expect(omitValues(false, {
			name: 'lili',
			age: 18,
			some: 18,
			info
		}, 'lili', info)).to.be.deep.equal({
			age: 18,
			some: 18,
		});
	});
    

	it('omitValues方法可以开启深度比较isDeep删除复杂数据类型', () => {
		expect(omitValues(false, {
			name: 'lili',
			age: 18,
			some: 18,
			info: {
				gender: 1,
				edu: 'senior'
			}
		}, 'lili', {
			gender: 1,
			edu: 'senior'
		})).to.be.deep.equal({
			age: 18,
			some: 18,
			info: {
				gender: 1,
				edu: 'senior'
			}
		});

		expect(omitValues(true, {
			name: 'lili',
			age: 18,
			some: 18,
			info: {
				gender: 1,
				edu: 'senior'
			}
		}, 'lili', {
			gender: 1,
			edu: 'senior'
		})).to.be.deep.equal({
			age: 18,
			some: 18,
		});
	});
    
	it('omitValues方法可以删除对象的null, undefined值', () => {
		expect(omitValues(false, {
			name: 'lili',
			age: null,
			gender: undefined,
			work: ''
		}, null, undefined)).to.be.deep.equal({
			name: 'lili',
			work: ''
		});
	});
    
	it('omitValues方法可以开启深度比较删除对象的NaN值', () => {
		expect(omitValues(false, {
			name: 'lili',
			age: NaN,
			work: ''
		}, NaN)).to.be.deep.equal({
			name: 'lili',
			work: '',
			age: NaN
		});
        
		expect(omitValues(true, {
			name: 'lili',
			age: NaN,
			work: ''
		}, NaN)).to.be.deep.equal({
			name: 'lili',
			work: '',
		});
	});
});