import { expect } from "chai";
import toFinite from '../src/toFinite.js'

describe('toFinite', () => {
    it('passes through a number that is already finite', () => {
        expect(toFinite(3.2)).to.equal(3.2)
    });
    it('can handle Number.MIN_VALUE', () => {
        expect(toFinite(Number.MIN_VALUE)).to.equal(5e-324)
    });
    it('converts Infinity to a finite value', () => {
        expect(toFinite(Infinity)).to.equal(1.7976931348623157e+308)
    });
    it('converts a string to a number if possible', () => {
        expect(toFinite('4.2')).to.equal(4.2)
    });
    it('converts -Infinity to a finite value', () => {
        expect(toFinite(-Infinity)).to.equal(-1.7976931348623157e+308)
    });
})