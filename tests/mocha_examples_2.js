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
    before(function() {
        console.log(`${counter.c} - before execution`);
    });

    beforeEach(function() {
        console.log(`${counter.c} - parent beforeEach execution`);
    });

    describe("Subfeature", function() {
        beforeEach(function() {
            console.log(`${counter.c} - nested beforeEach execution`);
        });
        
        it("should work successfully (nested describe)", function() {
            console.log(`${counter.c} - nested test execution`);
        });
    });

    it("should work successfully (parent describe)", function() {
        console.log(`${counter.c} - parent test execution`);
    });
});


// RUNNING  0-0 in chrome - /tests/mocha_examples_2.js
// Stdout:
// [0-0] 1 - file parsing
// [0-0] 2 - before execution
// [0-0] 3 - beforeEach execution
// [0-0] 4 - parent test execution
// [0-0] 5 - beforeEach execution
// [0-0] 6 - nested test execution


// "spec" Reporter:
// ------------------------------------------------------------------
// [chrome #0-0] Spec: /Users/oleksandrkhotemskyi/Documents/UI_AUTOMATION_course/tests/mocha_examples_2.js
// [chrome #0-0] Running: chrome
// [chrome #0-0]
// [chrome #0-0] Feature
// [chrome #0-0]    ✓ should work successfully (parent describe)
// [chrome #0-0]
// [chrome #0-0]     Subfeature
// [chrome #0-0]        ✓ should work successfully (nested describe)
// [chrome #0-0]
// [chrome #0-0] 2 passing (80ms)
