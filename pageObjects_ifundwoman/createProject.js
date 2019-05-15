class CreateProject {
    open() {
        browser.url("https://test-ifw.pantheonsite.io/projects/add");
    }

    createProject(options) {
        $("#project-add-form input#edit-f-goal-0-value").setValue(options.goal);
        $("#project-add-form input#edit-name-0-value").setValue(options.name);
        $("#project-add-form input#edit-submit").click();
    }
}

module.exports.CreateProject = new CreateProject();
