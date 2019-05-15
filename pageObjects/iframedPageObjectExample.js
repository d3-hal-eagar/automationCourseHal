/**
 * Example of working with iframes
 */
class IframedPage {
    open() {
        browser.url("http://the-internet.herokuapp.com/iframe");
    }
    getTitle() {
        return $("h3").getText();
    }

    doInFrame(action) {
        try {
            browser.switchToFrame($("iframe"));
            return action();
        } finally {
            // finally allows to always quit frame, even in case of errors.
            browser.switchToParentFrame();
        }
    }
    getEditorText() {
        this.doInFrame(function() {
            return $("p").getText();
        });
    }

    openNewTab() {
        $("button").click();
        browser.waitUntil(function() {
            return browser.getWindowHandles().length > 1;
        });
        let handles = browser.getWindowHandles();
        browser.switchToWindow(handles[1]);
    }
}
