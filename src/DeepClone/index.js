import * as tc from '../TypeChecker';

const clonedMap = new Map();

/**
 * 深度克隆
 * @param {any} target 
 * @param {object} options 
 */
const DeepClone = (target) => {
	if(
		isSimpleData(target) ||
		tc.isNil(target) ||
        tc.isFunction(target)
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
	const res = target.map(v => DeepClone(v));
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
			cloneResult[key] = DeepClone(target[key]);
		}
	}

	if(typeof Symbol === 'symbol') {
		const symbolKeys = Object.getOwnPropertySymbols(target);
		symbolKeys.forEach(symbol => {
			cloneResult[symbol] = DeepClone(target[symbol]);
		});
	}

	return cloneResult;
};

export default DeepClone;