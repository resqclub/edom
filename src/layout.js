// const { createElement } = require('./ui');

var ui = require('./ui');

window.ui = ui;

const { mount, el } = require('redom');

let layoutConfig = {};

let layout = module.exports;

layout.set = function(json) {
    layoutConfig = json;
    update();
};

layout.remove = function(path) {
    var paths = path.split('/').filter(Boolean);

    if (paths.length === 0) {
        layoutConfig = {};
        update();
        return;
    }

    var lastElement = paths.pop();

    var element = layoutConfig;
    paths.forEach(p => {
        element = element.children[p];
    });

    delete element.children[lastElement];

    update();
};

function update() {
    if (!layoutConfig.type) {
        $('#main').empty();
        addAddRootElementButton();
        return;
    }

    let path = '';
    let rootElement = ui.createElement(layoutConfig, path);
    mount(main, rootElement);
}
update();

function addAddRootElementButton() {
    mount(main, el('i#addRootElementButton', {
        class: 'clickableIcon fa fa-plus',
        'aria-hidden': true,
        onclick: function() {
            layout.set({ type: 'Container' });
        }
    }));
}
