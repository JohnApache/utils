import deepClone from './DeepClone';
import deepEqual from './DeepEqual';
import * as typeChecker from './TypeChecker';
import * as omit from './Omit';
import arrayUtils from './ArrayUtils';

const omitKeys = omit.OmitKeys;
const omitValues = omit.OmitValues;

export {
	deepClone,
	typeChecker,
	omit,
	arrayUtils,
	deepEqual,
	omitKeys,
	omitValues
};

export default {
	deepClone,
	deepEqual,
	typeChecker,
	arrayUtils
};