import { expect } from "chai"
import every from '../src/every.js'

describe("Every", () => {
    it('returns true for an empty array', () => {
        expect(every([], Boolean)).to.equal(true)
    });
    it('returns false for an array with falsey value inside', () => {
        expect(every([true, 1, null, 'yes'], Boolean)).to.equal(false)
    });
    it('returns false for an array with falsey value as last value', () => {
        expect(every([true, 1, 'yes', 0], Boolean)).to.equal(false)
    });
    it('returns false for an array with null as first value', () => {
        expect(every([false, true, 1, 'yes'], Boolean)).to.equal(false)
    });
    it('returns true for an array that does not contain falsey elements', () => {
        expect(every([true, 1, 2, 3, 4, 'yes', 'of course', Object('a')], Boolean)).to.equal(true)
    });
})