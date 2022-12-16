import chai from "chai"
import chunk from "../src/chunk.js"
const expect = chai.expect

describe.skip("Chunk", () => {
    it("splits an array of 4 characters to groups of 2", () =>{
        expect(chunk(['a', 'b', 'c', 'd'], 2)).to.deep.equal([['a', 'b'], ['c', 'd']])
    });
    it("splits an array of 4 characters to groups of 3 and puts remaining elements to their own chunk", () => {
        expect(chunk(['a', 'b', 'c', 'd'], 3)).to.deep.equal([['a','b','c'], ['d']])
    });
   })