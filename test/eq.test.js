import chai from "chai"
import eq from "../src/eq.js"
const expect = chai.expect

describe("Equals", () => {
    it("adds positive number to positive number", () =>{
        expect(eq("abc","abc")).to.equal(true)
    });
   })