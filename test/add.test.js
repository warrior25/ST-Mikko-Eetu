import chai from "chai"
import add from "../src/add.js"
const expect = chai.expect

describe("Sum", () => {
    it("adds positive number to positive number", () =>{
        expect(add(3,6)).to.equal(9)
    });

    it("adds positive number to negative number", () =>{
        expect(add(-4,6)).to.equal(2)
    });

    it("adds neagtive number to positive number", () =>{
        expect(add(4,-6)).to.equal(-2)
    });

    it("adds neagtive number to negative number", () =>{
        expect(add(-4,-6)).to.equal(-10)
    });

    it("adds zero to negative number", () =>{
        expect(add(-4,0)).to.equal(-4)
    });

    it("adds zero to positive number", () =>{
        expect(add(4,0)).to.equal(4)
    });

    it("adds zero to zero", () =>{
        expect(add(0,0)).to.equal(0)
    });

    it("adds negative number to zero", () =>{
        expect(add(0,-6)).to.equal(-6)
    });

    it("adds positive number to zero", () =>{
        expect(add(0,6)).to.equal(6)
    });
   })