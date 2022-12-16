import { expect } from "chai";
import get from '../src/get.js'

describe("Get", () => {
    it('gets the value at path of object using short notation', () => {
        const object = { 'a': [{ 'b': { 'c': 3 } }] };
        expect(get(object, 'a[0].b.c')).to.equal(3)
    });
    it('gets the value at path of object using an array of path keys', () => {
        const object = { 'a': [{ 'b': { 'c': 3 } }] };
        expect(get(object, ['a', '0', 'b', 'c'])).to.equal(3)
    });
    it('returns given default value if the object has nothing at the given path', () => {
        const object = { 'a': [{ 'b': { 'c': 3 } }] };
        expect(get(object, 'a.b.c', 'default')).to.equal('default')
    })
})