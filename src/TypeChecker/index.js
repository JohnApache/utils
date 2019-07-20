// 常用类型检查工具
export const isString = (target) => {
	return typeof target === 'string';
};

export const isNumber = (target) => {
	return typeof target === 'number';
};

export const isBoolean = (target) => {
	return typeof target === 'boolean';
};

export const isSymbol= (target) => {
	return typeof target === 'symbol';
};

export const isUndefined = (target) => {
	return typeof target === 'undefined';
};

export const isNull = (target) => {
	return Object.prototype.toString.call(target) === '[object Null]';
};

export const isNil = (target) => {
	return isUndefined(target) || isNull(target);
};

export const isFunction = (target) => {
	return typeof target === 'function';
};

export const isArray = (target) => {
	return Object.prototype.toString.call(target) === '[object Array]';
};

export const isObject = (target) => {
	return Object.prototype.toString.call(target) === '[object Object]';
};

export const isDate = (target) => {
	return Object.prototype.toString.call(target) === '[object Date]';
};

export const isRegExp = (target) => {
	return Object.prototype.toString.call(target) === '[object RegExp]';
};