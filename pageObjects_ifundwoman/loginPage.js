class LoginPO {
    open() {
        browser.url("https://test-ifw.pantheonsite.io/dashboard/login");
    }
    login(username, password) {
        $('input[type="email"]#edit-name').setValue(username);
        $('input[type="password"]#edit-pass').setValue(password);
        $("input#edit-submit.button").click();
        $('a[href="/dashboard"].profile').waitForDisplayed();
    }
}

module.exports.Login = new LoginPO()