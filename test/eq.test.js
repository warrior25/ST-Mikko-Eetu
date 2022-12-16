import chai from "chai"
import eq from "../src/eq.js"
const expect = chai.expect

describe("Equals", () => {
    const object = { 'a': 1 }
    const other = { 'a': 1 }

    it("compares an object with the same object", () => {
        expect(eq(object, object)).to.equal(true)
    });

    it("compares an object with a different object that has the same content", () => {
        expect(eq(object, other)).to.equal(false)
    });

    it("compares two equal strings", () =>{
        expect(eq("abc","abc")).to.equal(true)
    });

    it("compares NaN to NaN", () => {
        expect(eq(NaN, NaN)).to.equal(true)
    });

    it("compares object to NaN", () => {
        expect(eq(object, NaN)).to.equal(false)
    })

   })

describe.skip("Equals", () => {
    it("compares a string with an object made from that string", () => {
        expect(eq('a', Object('a'))).to.equal(false)
    });
})