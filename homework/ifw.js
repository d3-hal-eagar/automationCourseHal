const { expect, assert, should } = require("chai");
should(); // Actually register "should" assertions
const fs = require('fs');
function saveScreenShot(data, filename) {
    let stream = fs.createWriteStream('reports/'+filename+'.png');
    stream.write(new Buffer(data, 'base64'));
    stream.end();
}
function wrapWithDataId (dataTest) {
    //let data-attribute = 'data-test';
    const dataAttribute = 'data-drupal-selector';
    let cssSelector = '';
    if (dataTest.match(/^(\.|#|\+|\[)/)) {
        //if (dataTest.startsWith('#') || dataTest.startsWith('.')) {
        cssSelector = dataTest;
    } else if (dataTest.startsWith('<')) {
        cssSelector = dataTest.replace(/^<|>$/g, '');
    } else if (dataTest.startsWith('^')) {
        dataTest = dataTest.replace(/^\^/, '');
        cssSelector = '['+dataAttribute+'^='+dataTest+']';
    } else if (dataTest.startsWith('$')) {
        dataTest = dataTest.replace(/^\$/, '');
        cssSelector = '['+dataAttribute+'$='+dataTest+']';
    } else if (dataTest.startsWith('*')) {
        dataTest = dataTest.replace(/^\*/, '');
        cssSelector = '['+dataAttribute+'*='+dataTest+']';
    } else {
        cssSelector = '['+dataAttribute+'='+dataTest+']';
    }
    return cssSelector;
};

function getElement(dataTest, options) {
    const separatorsChildFirst = [' in ', ' on ', ' within '];
    const separatorsParentFirst = [' containing ', ' with '];
    let multiSelectorsChildFirst = dataTest.split(new RegExp(separatorsChildFirst.join('|'), 'g'));
    let multiSelectorsParentFirst = dataTest.split(new RegExp(separatorsParentFirst.join('|'), 'g'));
    if (multiSelectorsChildFirst.length == 2) {
        return $(multiSelectorsChildFirst[1]+' '+multiSelectorsChildFirst[0]);
    }
    if (multiSelectorsParentFirst.length == 2) {
        return getParentElement(multiSelectorsParentFirst[0],multiSelectorsParentFirst[1]);
    } else {
        let cssSelector = wrapWithDataId(dataTest);
        return cy.get(cssSelector, options);
    }
};


function getParentElement (parentDataTest, childDataTest)  {
    let parentCssSelector = wrapWithDataId(parentDataTest);
    let childCssSelector = wrapWithDataId(childDataTest);
    // temporary not always right
    return $(parentCssSelector);

    let parentElements = $$(parentDataTest);
    parentElements.forEach(function(possibleParent) {
        let realParent = browser.findElementsFromElement(possibleParent, 'css selector', childCssSelector);
        // what does this return?  doc says it's json but why?
        // grok this https://www.intricatecloud.io/2018/11/webdriverio-tips-using-selector-vs-browser-elementsselector/
        // so this is such a mess because it's down to raw webdriver protocol, so what's the 'easy' way
        // browser.element("[dropdown-menu]").element("=Projects");
        console.log('realParent',realParent);
        if(realParent.length) {
            return possibleParent;
        }
    });
};

// convert these to commands https://webdriver.io/docs/customcommands.html
// how did I do this on hamilton?

const ifw_server = 'https://test-ifw.pantheonsite.io';
// so where is a better place to put all that setup I probably want for all my tests

describe('Registration', function () {
    it('Should Fail with invalid inputs', function () {
        browser.url(ifw_server+'/dashboard/register');
        $('.messages.messages--error').waitForExist(20,true);
        $('form#ifw-user-public-form input#edit-submit').click();
        $('.messages.messages--error').waitForExist(20);
        // my preferred
        $('main#content div#box-product').getAttribute('data-name').should.equal(expected_product_name,
            `Wrong product found on page: ${$('main#content div#box-product').getAttribute('data-name')} expected: ${expected_product_name}`);
        browser.pause(1000);


        //data-drupal-selector=input#edit-field-first-name-0-value
        //data-drupal-selector=input#edit-field-last-name-0-value
        //data-drupal-selector="edit-mail"
        //edit-name
        //edit-pass-pass1
        //edit-pass-pass2
        //edit-subscribe
        //edit-submit
    })
});
