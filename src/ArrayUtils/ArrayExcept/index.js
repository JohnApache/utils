import * as tc from '../../TypeChecker';
/**
 * 数组取差集
 * @param {array} sourceArray 
 * @param {array} destArray 
 */
const ArrayExcept = (sourceArray, destArray) => {
	if(!tc.isArray(sourceArray) || !tc.isArray(destArray)) {
		throw new TypeError('params sourceArray or destArray not an array');
	}
	if(sourceArray.length <= 0 || destArray.length <= 0) return [];
	return sourceArray.filter(val => destArray.every(v => {
		if(Number.isNaN(val) && Number.isNaN(v)) return false;
		return val !== v;
	}));
};


export default ArrayExcept;