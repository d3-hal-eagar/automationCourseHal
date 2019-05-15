const { expect, assert, should } = require("chai");
// Actually register "should" assertions
should();

describe(`Assertion types`, function() {
    it("assert", function() {
        assert.equal("something", "something");
    });

    it("expect", function() {
        expect("something").to.equal("something");
    });

    it("should", function() {
        "something".should.equal("something");
    });
});

describe(`Error messages`, function() {
    it("assert", function() {
        assert.equal("something", "something other", "Error message!");
    });

    it("expect", function() {
        expect("something", "Error message!").to.equal("something other");
        expect("something").to.equal("something other", );
        expect(true, "Error message!").to.be.true
    });

    it("should", function() {
        "something".should.equal("something other", "Error message!");
    });
});

describe(`Different checks`, function() {
    it("assert", function() {
        assert.equal("something", "something");
        assert.isTrue($('div').isDisplayed());
        assert.isFalse(false);

        assert.include([2, 1], 1);
        assert.include("Some long string", "long");

        assert.include($('.alert').getText(), 'mail sent')
    });

    it("expect", function() {
        expect("something", "Error message!").to.equal("something");
        expect(true).to.be.true;
        expect(false).to.be.false;

        expect([2, 1]).to.contain(1);
        expect("Some long string").to.contain("long");
    });

    it("should", function() {
        let a = "something"
        a.should.equal("something");
        true.should.be.true;
        false.should.be.false;
        [(2, 1)].should.contain(1);
        "Some long string".should.contain("long");

        $('div').getText().should.contain('test')
    });
});
