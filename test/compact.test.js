import { expect } from "chai"
import compact from "../src/compact.js"

describe.skip('Compact', () => {
    it('removes falsey values from an array', () => {
        expect(compact([0, 1, false, 2, '', 3])).to.deep.equal([1, 2, 3])
    });
    it('removes false from an array', () => {
        expect(compact([1, 2, false, 3])).to.deep.equal([1, 2, 3])
    });
    it('removes null from an array', () => {
        expect(compact(['a', 'b', 'c', null])).to.deep.equal(['a','b','c'])
    });
    it('removes 0 from an array', () => {
        expect(compact([0, 1, 2, 3])).to.deep.equal([1, 2, 3])
    });
    it('removes empty string from an array', () => {
        expect(compact([1, 2, "", 3])).to.deep.equal([1,2,3])
    });
    it('removes undefined from an array', () => {
        expect(compact([1, 2, 3])).to.deep.equal([1, undefined, 2,3])
    });
    it('removes NaN from an array', () => {
        expect(compact([NaN, 1, 2, 3])).to.deep.equal([1,2,3])
    });
    
})