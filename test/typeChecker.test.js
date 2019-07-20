import {expect} from 'chai';
import {typeChecker as tc} from '../src/index';

describe('typechecker 类型检查方法测试', () => {
	it('isString()方法测试', () => {
		expect(tc.isString('hello')).to.be.ok;
		expect(tc.isString(123)).to.be.not.ok;
	});
    
	it('isNumber()方法测试', () => {
		expect(tc.isNumber(123)).to.be.ok;
		expect(tc.isNumber('hello')).to.be.not.ok;
	});
    
	it('isBoolean()方法测试', () => {
		expect(tc.isBoolean(true)).to.be.ok;
		expect(tc.isBoolean(false)).to.be.ok;
		expect(tc.isBoolean(123)).to.be.not.ok;
	});
    
	it('isSymbol()方法测试', () => {
		expect(tc.isSymbol(Symbol())).to.be.ok;
		expect(tc.isSymbol(123)).to.be.not.ok;
	});
    
	it('isFunction()方法测试', () => {
		expect(tc.isFunction(()=>{})).to.be.ok;
		expect(tc.isFunction(function() {})).to.be.ok;
		expect(tc.isFunction(123)).to.be.not.ok;
	});
    
	it('isNull()方法测试', () => {
		expect(tc.isNull(null)).to.be.ok;
		expect(tc.isNull(undefined)).to.be.not.ok;
		expect(tc.isNull(0)).to.be.not.ok;
		expect(tc.isNull(NaN)).to.be.not.ok;
	});
    
	it('isUndefined()方法测试', () => {
		expect(tc.isUndefined(undefined)).to.be.ok;
		expect(tc.isUndefined(null)).to.be.not.ok;
		expect(tc.isUndefined(0)).to.be.not.ok;
		expect(tc.isUndefined(NaN)).to.be.not.ok;
	});
    
	it('isNil() null 或者 undefined方法测试', () => {
		expect(tc.isNil(undefined)).to.be.ok;
		expect(tc.isNil(null)).to.be.ok;
		expect(tc.isUndefined(0)).to.be.not.ok;
		expect(tc.isUndefined(NaN)).to.be.not.ok;
	});
    
	it('isArray()方法测试', () => {
		expect(tc.isArray([])).to.be.ok;
		expect(tc.isArray([1])).to.be.ok;
		expect(tc.isArray({})).to.be.not.ok;
		expect(tc.isArray(123)).to.be.not.ok;
	});
    
	it('isObject()方法测试', () => {
		expect(tc.isObject({})).to.be.ok;
		expect(tc.isObject({age: 18})).to.be.ok;
		expect(tc.isObject([])).to.be.not.ok;
		expect(tc.isObject([{age: 18}])).to.be.not.ok;
	});
    
	it('isDate()方法测试', () => {
		expect(tc.isDate(new Date())).to.be.ok;
		expect(tc.isDate('2017-11-9')).to.be.not.ok;
	});
    
	it('isRegExp()方法测试', () => {
		expect(tc.isRegExp(/^test$/)).to.be.ok;
		expect(tc.isRegExp('test')).to.be.not.ok;
	});
});