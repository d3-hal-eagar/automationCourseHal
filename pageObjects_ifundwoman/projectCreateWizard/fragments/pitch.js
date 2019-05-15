class Pitch {
    open() {
        $('.vertical-tabs__menu a[href*="pitch"]').click();
    }

    enterPitchInfo(options) {
        return this.doInIFrame(() => {
            return this.uploadFile(options.filepath);
        });
    }

    doInIFrame(action, iframe = "iframe#entity_browser_iframe_featured_image") {
        try {
            browser.switchToFrame($(iframe));
            return action();
        } finally {
            browser.switchToParentFrame(); // leaving upload iframe
        }
    }

    uploadFile(filepath) {
        browser.execute(
            `document.querySelector('input[type="file"]').style = "display: block"`
        );
        const fileToUploadPath = filepath;
        console.log("FILEPATH", fileToUploadPath);
        $(`input[type="file"]`).waitForDisplayed();
        $(`input[type="file"]`).setValue(fileToUploadPath);
        browser.pause(5000); // giving time to upload
        $('#edit-submit[value="Save Image"]').click();
        browser.pause(1000); // giving time to upload
    }
}

module.exports.Pitch = Pitch;
