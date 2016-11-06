let ui = module.exports;

ui.Container = require('./container');

ui.createElement = function(config, path) {
    if (typeof ui[config.type] === 'function')
        return new ui[config.type](path);
    else
        throw new Error(`Invalid type: ${ config.type }`);
};
