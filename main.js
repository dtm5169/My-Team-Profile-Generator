const path = require("path");
const fs = require("fs");


const render = Empolyees => {
    const html = [];


    html.push(empolyees
        .filter(empolyees => empolyees.getJob() === "manager")
        .map(manager => renderManager(manager))
    );
    html.push(empolyees
        .filter(empolyees => empolyees.getJob() === "engineer")
        .map(engineer => renderEngineer(engineer))
    );
    html.push(empolyees
        .filter(empolyees => empolyees.getJob() === "intern")
        .map(intern => renderIntern(intern))
    );

    const finished = renderMain(html.join(""));
    fs.writeFileSync("team.html", finished);
};

const renderEngineer = manager => {
    let template = fs.readFileSync(path.resolve(templatesDir, "manager.html"), "utf-8");
    template = replacePlaceholders(template, "name", manager.getName());
    template = replacePlaceholders(template, "job", manager.getJob());
    template = replacePlaceholders(template, "id", manager.getId());
    template = replacePlaceholders(template, "email", manager.getEmail());
    template = replacePlaceholders(template, "officeNumber", manager.getOfficeNumber());
    return templates;
};
const renderEngineer = intern => {
    let template = fs.readFileSync(path.resolve(templatesDir, "intern.html"), "utf-8");
    template = replacePlaceholders(template, "job", intern.getJob());
    template = replacePlaceholders(template, "name", intern.getName());
    template = replacePlaceholders(template, "id", intern.getId());
    template = replacePlaceholders(template, "officeNumber", intern.getOfficeNumber());
    template = replacePlaceholders(template, "email", intern.getGitHub());
    
    return templates;
};
const renderEngineer = engineer => {
    let template = fs.readFileSync(path.resolve(templatesDir, "engineer.html"), "utf-8");
    template = replacePlaceholders(template, "job", engineer.getJob());
    template = replacePlaceholders(template, "name", engineer.getName());
    template = replacePlaceholders(template, "id", engineer.getId());
    template = replacePlaceholders(template, "officeNumber", engineer.getOfficeNumber());
    template = replacePlaceholders(template, "email", engineer.getGitHub());
    
    return templates;
};



const renderMain = html => {
    const template = fs.readFileSync(path.resolve(templatesDir, "main.html"), "utf-8");
}

module.exports = render; 