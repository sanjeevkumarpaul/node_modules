"use strict";
exports.LogLevel = {
    None: 0,
    Error: 1,
    Info: 3,
    Debug: 7
};
var BUILD_TYPE = 'prod';
exports.Config = {
    interpolation: ['{{', '}}'],
    resolveUrl: function (url, d) {
        return url;
    },
    transformTemplate: function (code, url, d) {
        return { code: code, url: url };
    },
    transformStyle: function (code, url, d) {
        return { code: code, url: url };
    },
    predefinedDirectives: [
        { selector: 'form', exportAs: 'ngForm' }
    ],
    logLevel: BUILD_TYPE === 'dev' ? exports.LogLevel.Debug : exports.LogLevel.None
};
var root = require('app-root-path');
try {
    var newConfig = require(root.path + '/.codelyzer');
    Object.assign(exports.Config, newConfig);
}
catch (e) { }
