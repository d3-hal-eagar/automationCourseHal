const { expect, assert, should } = require("chai");
should(); // Actually register "should" assertions
var fs = require('fs');
function saveScreenShot(data, filename) {
    var stream = fs.createWriteStream('reports/'+filename+'.png');
    stream.write(new Buffer(data, 'base64'));
    stream.end();
}
const duck_shop = 'http://ip-5236.sunline.net.ua:38015';
// so where is a better place to put all that setup I probably want for all my tests

describe('Yellow Duck Product page', function () {
    it('Should contain the correct product info', function () {
        browser.url(duck_shop+'/rubber-ducks-c-1/premium-ducks-c-2/vip-yellow-duck-p-6');
        let expected_product_name = 'VIP Yellow Duck';
        let duck_name = $('main#content div#box-product').getAttribute('data-name');
        if (!duck_name == expected_product_name) {
            throw new Error(`Wrong product found on page: ${$('main#content div#box-product').getAttribute('data-name')} expected: ${expected_product_name}`)
        }

        // alternative checks
        expect($('main#content div#box-product').getAttribute('data-name')).to.equal(expected_product_name,);
        // my preferred
        $('main#content div#box-product').getAttribute('data-name').should.equal(expected_product_name,
            `Wrong product found on page: ${$('main#content div#box-product').getAttribute('data-name')} expected: ${expected_product_name}`);
        browser.pause(1000);
    })
});

describe('Acme Duck page', function () {
    it('Should contain at least 4 ducks', function () {
        browser.url(duck_shop+'/acme-corp-m-1/');
        browser.pause(1000);
        let uu_png = browser.takeScreenshot();
        saveScreenShot(uu_png, '4ducks');
        //console.log('product count ',$$('.products .product[data-name$="Duck"]').length);
        $$('.products .product[data-name$="Duck"]').should.have.length(4);

    })
});

describe('Acme Duck page', function () {
    it('Should contain at least 4 ducks', function () {
        browser.url(duck_shop+'/about-us-i-1');
        browser.pause(1000);
        //console.log('product count ',$$('.products .product[data-name$="Duck"]').length);
        let nav_links = $$('#box-information-links li');
        let expected_links = ['About Us', 'Cookie Policy', 'Delivery Information', 'Newsletter', 'Privacy Policy', 'Terms & Conditions'];
        nav_links.should.have.length(6);
        nav_links.forEach(function(link) {
            if(!expected_links.includes(link.getText())) {
                throw new Error(`Unexpected nav link text: "${link.getText()}" in information menu`)
            }
        });

    })
});
