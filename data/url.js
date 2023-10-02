const {LoginURL} = require("./pageObjects/login.po");
const {MainURL} = require("./pageObjects/main.po");

const URLs = {
    ...LoginURL,
    ...MainURL,
}

module.exports = {URLs}
