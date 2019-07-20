import * as tc from '../TypeChecker';

const _DeepClone = (target) => {
	if(
		isSimpleData(target) ||
		tc.isNil(target) ||
		tc.isFunction(target) ||
		tc.isDate(target) ||
		tc.isRegExp(target)
	) {
		return cloneSimpleData(target);
	}
	if(tc.isArray(target)) {
		return cloneArrayData(target);
	}
	if(tc.isObject(target)) {
		return cloneObjectData(target);
	}
};

const isSimpleData = (target) => {
	return (
		tc.isNumber(target) || 
        tc.isString(target) || 
        tc.isSymbol(target) || 
        tc.isBoolean(target)
	);
};

const cloneSimpleData = (target) => {
	return target;
};


const cloneArrayData = (target) => {
	if(clonedMap.has(target)) {
		return clonedMap.get(target);
	}
	const cloneResult = [];
	clonedMap.set(target, cloneResult);
	const res = target.map(v => _DeepClone(v));
	cloneResult.push(...res);
	return cloneResult;
};

const cloneObjectData = (target) => {
	if(clonedMap.has(target)) {
		return clonedMap.get(target);
	}
	const cloneResult = {};
	clonedMap.set(target, cloneResult);
	for(let key in target) {
		if(target.hasOwnProperty(key)) {
			cloneResult[key] = _DeepClone(target[key]);
		}
	}

	if(typeof Symbol !== 'undefined') {
		const symbolKeys = Object.getOwnPropertySymbols(target);
		symbolKeys.forEach(symbol => {
			cloneResult[symbol] = _DeepClone(target[symbol]);
		});
	}

	return cloneResult;
};

let clonedMap = new Map();


/**
 * 深度克隆目标数据
 * @param {any} target 
 * @param {object} options 
 */
const DeepClone = (target) => {
	clonedMap = new Map();
	return _DeepClone(target);
};

export default DeepClone;