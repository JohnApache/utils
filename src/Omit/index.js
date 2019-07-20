import * as tc from '../TypeChecker/index';
import au from '../ArrayUtils';
/**
 * 删除对象的 指定key 并返回删除后的 数组
 * @param {object} object 删除对象
 * @param {array|string|symbol} keys 删除键
 * @param {boolean} runInSelf 是否作用于自身
 */
export const OmitKeys = (object, keys) => {
	if(
		!tc.isObject(object)
	) {
		throw new Error('keys type is array or string, symbol');
	}

	if(
		!tc.isString(keys) ||
        !tc.isSymbol(keys) || 
        !tc.isArray(keys)
	) {
		throw new Error('keys type is array or string, symbol');
	}
    
	const result = {};
	const exceptKeys = au.ArrayExcept(Object.keys(object), [].concat(keys));
	exceptKeys.forEach(v => {
		result[v] = object[v];
	});
	return result;
};

export const OmitValues = (object, vals) => {
	
}; 