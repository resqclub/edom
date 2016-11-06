const { el } = require('redom');
const layout = require('../layout');

module.exports = class ToolBox {
    constructor(component) {
        var self = this;
        this.component = component;
        this.el = el('div.edomToolBox',
            this.closeButton = el('i.clickableIcon.fa.fa-close', { onclick })
        );

        function onclick() {
            layout.remove(self.component.path);
        }
    }
    update(json) {

    }
};



// <i id="addRootElement" class="clickableIcon fa fa-plus" aria-hidden="true"></i>
