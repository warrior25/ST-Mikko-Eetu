import { expect } from "chai"
import { it } from "mocha";
import filter from '../src/filter.js'

describe("Filter", () => {
    it('filters objects by their attributes', () => {
        const users = [
            { 'user': 'barney', 'active': true },
            { 'user': 'fred',   'active': false }
        ]
        expect(filter(users, ({active})=>active)).to.deep.equal([{ 'user': 'barney', 'active': true }])
    });
    it('filters integers by a function', () => {
        expect(filter([1,2,3,4,5,6], (n) => {return n % 2 == 0})).deep.equal([2,4,6])
    });

    it.skip('filters integers with a non-matching filter', () => {
        expect(filter([1,2,3,4,5,6], (n) => {return n > 10})).deep.equal([])
    });
})