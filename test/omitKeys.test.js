import {expect} from 'chai';
import {omitKeys} from '../src/index';

describe('omitKeys方法测试', () => {
	it('omitKeys方法参数第一个不是对象会抛出异常', () => {
		expect(omitKeys.bind(null, '12', 'age')).to.throw(TypeError);
	});
    
	it('omitKeys方法参数第二个参数不是字符串数组或者symbol会抛出异常', () => {
		expect(omitKeys.bind(null, {
			name: 'lili', age: 18
		}, {name: 'lili'})).to.throw(TypeError);
		expect(omitKeys.bind(null, {
			name: 'lili', age: 18
		}, 'name')).to.not.throw(TypeError);
	});

	it('omitKeys能删除单个普通字符串key', () => {
		const omitResult = omitKeys({
			name: 'lili', age: 18
		}, 'age');
		expect(omitResult).to.be.deep.equal({
			name: 'lili'
		});
	});
    
	it('omitKeys能删除单个symbol形式的key', () => {
		const _key = Symbol();
		const omitResult = omitKeys({
			name: 'lili', age: 18, [_key]: 123
		}, _key);
        
		expect(omitResult).to.be.deep.equal({
			name: 'lili', age: 18
		});
	});
    
	it('omitKeys能删除多个symbol或普通形式的key', () => {
		const _key = Symbol();
		const omitResult = omitKeys({
			name: 'lili', age: 18, [_key]: 123
		}, [_key, 'name']);
        
		expect(omitResult).to.be.deep.equal({
			age: 18
		});
	});

});