import * as tc from '../../TypeChecker';

/**
 * 数组取并集
 * @param {array} sourceArray 
 * @param {array} destArray 
 */
const ArrayUnion = (sourceArray, destArray) => {
	if(!tc.isArray(sourceArray) || !tc.isArray(destArray)) {
		throw new Error('params sourceArray or destArray not an array');
	}
	const result = new Set(sourceArray.concat(destArray));
	return Array.from(result);
};

export default ArrayUnion;