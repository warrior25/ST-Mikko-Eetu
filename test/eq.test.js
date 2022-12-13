import chai from "chai"
import eq from "../src/eq.js"
const expect = chai.expect

describe("Equals", () => {
    it("compares two equal strings", () =>{
        expect(eq("abc","abc")).to.equal(true)
    });
   })