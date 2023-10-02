const {LoginPOM} = require("./pageObjects/login.po");
const {MainPOM} = require("./pageObjects/main.po");

const SELECTORS = {
    ...LoginPOM,
    ...MainPOM,
}
module.exports = {SELECTORS}
