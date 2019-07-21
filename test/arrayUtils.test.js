import {expect} from 'chai';
import {arrayUtils as au} from '../src/index';

describe('arrayUtils数组操作方法测试', () => {
	describe('ArrayExcept()方法测试', () => {
		it('ArrayExcept方法数组取差集参数必须传入数组否则会抛出异常', () => {
			expect(au.ArrayExcept.bind(au, [], '')).to.throw(TypeError);
			expect(au.ArrayExcept.bind(au, [], [])).to.not.throw(TypeError);
		});
        
		it('ArrayExcept方法可以取source数组相对于target数组的差集', () => {
			expect(au.ArrayExcept([1, 2, 3], [2, 3])).to.be.deep.equal([1]);
			expect(au.ArrayExcept([1, 2, 3], [3])).to.be.deep.equal([1, 2]);
		});
        
		it('ArrayExcept方法可以针对NaN也可以排除', () => {
			expect(au.ArrayExcept([1, 2, 3, NaN], [2, NaN])).to.be.deep.equal([1, 3]);
		});
	});
	describe('ArrayIntersect()方法测试', () => {
		it('ArrayIntersect方法数组取交集参数必须传入数组否则会抛出异常', () => {
			expect(au.ArrayIntersect.bind(au, [], '')).to.throw(TypeError);
			expect(au.ArrayIntersect.bind(au, [], [])).to.not.throw(TypeError);
		});
		it('ArrayIntersect方法可以取source数组相对于target数组的交集', () => {
			expect(au.ArrayIntersect([1, 2, 3], [2, 3])).to.be.deep.equal([2, 3]);
			expect(au.ArrayIntersect([1, 2, 3], [3])).to.be.deep.equal([3]);
		});
		it('ArrayIntersect方法可以针对NaN也可以取交集', () => {
			expect(au.ArrayIntersect([1, 2, 3, NaN], [2, NaN])).to.be.deep.equal([2, NaN]);
		});
	});
	describe('ArrayUnion()方法测试', () => {
		it('ArrayUnion方法数组取并集参数必须传入数组否则会抛出异常', () => {
			expect(au.ArrayUnion.bind(au, [], '')).to.throw(TypeError);
			expect(au.ArrayUnion.bind(au, [], [])).to.not.throw(TypeError);
		});
		it('ArrayUnion方法可以取source数组相对于target数组的并集', () => {
			expect(au.ArrayUnion([1, 2, 3], [2, 3, 4])).to.be.deep.equal([1, 2, 3, 4]);
			expect(au.ArrayUnion([1, 2, 3], [3])).to.be.deep.equal([1, 2, 3]);
		});
		it('ArrayUnion方法可以针对NaN也可以取并集', () => {
			expect(au.ArrayUnion([1, 2, 3, NaN], [2, NaN, undefined, null])).to.be.deep.equal([1, 2, 3, NaN, undefined, null]);
		});
        
		it('ArrayUnion方法可以取并集的数组顺序是source在前target在后的排序关系', () => {
			expect(au.ArrayUnion([1, 2, 3, NaN], [2, NaN, undefined, null])).to.be.deep.equal([1, 2, 3, NaN, undefined, null]);
			expect(au.ArrayUnion([NaN, 1, 3, 2], [2, NaN, undefined, null])).to.be.deep.equal([NaN, 1, 3, 2, undefined, null]);
		});
	});
});