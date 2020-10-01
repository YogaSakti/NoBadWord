const chalk = require('chalk')

module.exports = {
    color = (text, color) => !color ? chalk.green(text) : chalk.keyword(color)(text),
    formatin = (duit) => {
        const reverse = duit.toString().split('').reverse().join('');
        let ribuan = reverse.match(/\d{1,3}/g);
        ribuan = ribuan.join('.').split('').reverse().join('');
        return ribuan;
    },
    inArray = (needle, haystack) => {
        for (let i = 0; i < haystack.length; i++) {
            if (haystack[i].id == needle) return i;
        }
        return false;
    }
}
