const { expect, assert, should } = require("chai");
should(); // Actually register "should" assertions
var fs = require('fs');
function saveScreenShot(data, filename) {
    var stream = fs.createWriteStream('reports/'+filename+'.png');
    stream.write(new Buffer(data, 'base64'));
    stream.end();
}
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
