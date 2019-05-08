/////////////////////////////////////////////////////////////////////////////
// MochaJS: HOW code is executed

// Simple counter to calculate number
class Counter {
    constructor() {
        this.innerC = 0;
    }
    get c() {
        this.innerC = this.innerC + 1;
        return this.innerC;
    }
}
const counter = new Counter();

console.log(`${counter.c} - file parsing`);
describe(`Feature`, function() {
    console.log(
        `${counter.c} - file parsing - reading content of describe block`
    );

    before(function() {
        console.log(`${counter.c} - before execution`);
    });

    beforeEach(function() {
        console.log(`${counter.c} - beforeEach execution`);
    });

    after(function() {
        console.log(`${counter.c} - after execution`);
    });

    afterEach(function() {
        console.log(`${counter.c} - afterEACH execution`);
    });

    it("should work successfully", function() {
        console.log(`${counter.c} - 1 test execution`);
    });

    it.skip("should be skipped", function() {
        console.log(`${counter.c} - 1 test execution`);
    });

    it("should fail", function() {
        console.log(`${counter.c} - 2 test execution`);
        throw new Error("Reason of test failure");
    });

    console.log(
        `${counter.c} - file parsing - reading content of describe block`
    );
});
console.log(`${counter.c} - file parsing finished`);
