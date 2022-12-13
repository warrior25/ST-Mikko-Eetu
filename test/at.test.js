import chai from "chai"
import at from "../src/at.js"
const expect = chai.expect

describe("At", () => {
    it("creates an array of values corresponding to `paths` of `object`", () =>{
        expect(at({ 'a': [{ 'b': { 'c': 3 } }, 4] }, ['a[0].b.c', 'a[1]'])).to.deep.equal([3,4])
    });
   })