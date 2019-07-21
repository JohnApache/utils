import * as tc from '../../TypeChecker';
/**
 * 数组取交集
 * @param {array} sourceArray 
 * @param {array} destArray 
 */
const ArrayIntersect = (sourceArray, destArray) => {
	if(!tc.isArray(sourceArray) || !tc.isArray(destArray)) {
		throw new TypeError('params sourceArray or destArray not an array');
	}
	if(sourceArray.length <= 0 || destArray.length <= 0) return [];

	return sourceArray.filter(val => destArray.some(v => {
		if(Number.isNaN(val) && Number.isNaN(v)) return true;
		return val === v;
	}));
};

export default ArrayIntersect;