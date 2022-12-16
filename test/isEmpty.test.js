import { expect } from "chai";
import isEmpty from '../src/isEmpty.js'

describe('isEmpty', () => {
    it('shows that null is empty', () => {
        expect(isEmpty(null)).to.equal(true)
    });
    it('shows that boolean value true is empty', () => {
        expect(isEmpty(true)).to.equal(true)
    });
    it('shows that an integer is empty', () => {
        expect(isEmpty(1)).to.equal(true)
    });
    it('shows that an empty list is empty', () => {
        expect(isEmpty([])).to.equal(true)
    });
    it('shows that empty object is empty', () => {
        expect(isEmpty({})).to.equal(true)
    });
    it('shows that a non-empty array is not empty', () => {
        expect(isEmpty([1,2,3])).to.equal(false)
    });
    it('shows that a non-empty string is not empty', () => {
        expect(isEmpty('abc')).to.equal(false)
    });
    it('shows that a non-empty object is not empty', () => {
        expect(isEmpty({'a':1})).to.equal(false)
    });


})