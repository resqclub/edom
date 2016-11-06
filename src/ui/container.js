const { el, text } = require('redom');
const ToolBox = require('./toolBox');

module.exports = class Container {
    constructor(path) {
        this.path = path;
        this.el = el('div.edomContainer',
            this.toolBox = new ToolBox(this),
            el('div', `Container. You would add children, lists and stuff here.`, {
                style: {
                    padding: '30px'
                }
            })
        );
    }
    update(json) {

    }
};
