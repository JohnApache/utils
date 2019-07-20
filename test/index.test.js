import {expect} from 'chai';
import utils, {deepClone} from '../src/index';
describe('mocha es6 语法babel 兼容测试', () => {
	it('import export 语法支持', () => {
		expect(utils).to.have.ownProperty('deepClone');
	});
    
	it('import export 语法支持', () => {
		expect(deepClone).to.be.a('function');
	});

	it('async await方法兼容', async () => {
		let t = 1;
		await new Promise(resolve => {
			setTimeout(() => {
				t++;
				resolve();
			}, 10);
		});
		expect(t).to.equal(2);
	});
}); 