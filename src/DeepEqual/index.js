import * as tc from '../TypeChecker';

const ArrayEqual = (source, target) => {
	if(tc.isArray(source)) {
		if(!tc.isArray(target)) return false;
		if(source.length !== target.length) return false;
		return source.every((v, i) => DeepEqual(v, target[i]));
	}
	return DeepEqual(source, target);
};

const _DeepEqual = (source, target) => {
	if(source === target) return true;
    
	if(typeof source !== typeof target) return false;

	if(Number.isNaN(source) && Number.isNaN(target)) return true;
    
	if(tc.isDate(source)) {
		if(!tc.isDate(target)) return false;
		return source.toString() === target.toString();
	}

	if(tc.isRegExp(source)) {
		if(!tc.isRegExp(target)) return false;
		return source.toString() === target.toString();
	}

	if(tc.isArray(source)) {
		return ArrayEqual(source, target);
	}

	if(tc.isObject(source)) {
		if(!tc.isObject(target)) return false;
		const skeys = Object.keys(source);
		const _skeys = Object.getOwnPropertySymbols(source);
		const tkeys = Object.keys(target);
		const _tkeys = Object.getOwnPropertySymbols(target);
		if(!ArrayEqual(skeys, tkeys) || !ArrayEqual(_skeys, _tkeys)) return false;
		return (
			skeys.every(v => _DeepEqual(source[v], target[v])) &&
            _skeys.every(v => _DeepEqual(source[v], target[v]))
		);
	}

};


/**
 * 深度比较两个数据是否值相等
 * @param {any} source 原始数据
 * @param {any} target 比较数据
 */
const DeepEqual = (source, target) => {
	return _DeepEqual(source, target);
};

export default DeepEqual;