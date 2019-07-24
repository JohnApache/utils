import * as tc from '../TypeChecker/index';
import au from '../ArrayUtils';
import deepEqual from '../DeepEqual';
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
		throw new TypeError('object type is array or string, symbol');
	}

	if(
		!tc.isString(keys) &&
        !tc.isSymbol(keys) && 
        !tc.isArray(keys)
	) {
		throw new TypeError('keys type is array or string, symbol');
	}
    
	const result = {};
	const allKeys = au.ArrayUnion(Object.keys(object), Object.getOwnPropertySymbols(object));
	const exceptKeys = au.ArrayExcept(allKeys, [].concat(keys));
	exceptKeys.forEach(v => {
		result[v] = object[v];
	});
	return result;
};


/**
 *删除object指定value 并返回删除后的 对象
 * @param  {boolean} isDeep 是否深度比较值 默认false
 * @param {object} object 
 * @param  {...any} vals 要删除的value 可以为多个
 */
export const OmitValues = (isDeep, object, ...vals) => {
	if(
		!tc.isObject(object)
	) {
		throw new TypeError('keys type is array or string, symbol');
	}

	if(vals.length <= 0) return {...object};

	const result = {};

	for(let key in object) {
		if(object.hasOwnProperty(key)) {
			const hasEqualValue = vals.some(v => {
				if(!isDeep) return v === object[key];
				return deepEqual(v, object[key]);
			});
			if(!hasEqualValue) {
				result[key] = object[key];
			}
		}
	}

	const _symbols = Object.getOwnPropertySymbols(object);

	_symbols.forEach(sym => {
		const hasEqualValue = vals.some(v => {
			if(!isDeep) return v === object[sym];
			return deepEqual(v, object[sym]);
		});
		if(!hasEqualValue) {
			result[sym] = object[sym];
		}
	});
	
	return result;
}; 