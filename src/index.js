import deepClone from './DeepClone';
import deepEqual from './DeepEqual';
import * as typeChecker from './TypeChecker';
import * as omit from './Omit';
import arrayUtils from './ArrayUtils';
import throttle from './Throttle';
import debounce from './Debounce';

const omitKeys = omit.OmitKeys;
const omitValues = omit.OmitValues;

module.exports = {
	deepClone,
	typeChecker,
	omit,
	arrayUtils,
	deepEqual,
	omitKeys,
	omitValues,
	throttle,
	debounce
};