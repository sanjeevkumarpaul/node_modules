"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var selectorNameBase_1 = require("./selectorNameBase");
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        var _this = _super.apply(this, arguments) || this;
        _this.handleType = 'Directive';
        return _this;
    }
    Rule.prototype.getTypeFailure = function () { return 'The selector of the directive "%s" should be used as %s (https://goo.gl/QS8kEs)'; };
    Rule.prototype.getNameFailure = function () { return 'The selector of the directive "%s" should be named %s (https://goo.gl/QS8kEs)'; };
    Rule.prototype.getSinglePrefixFailure = function () { return 'The selector of the directive "%s" should have prefix "%s" (https://goo.gl/uacjKR)'; };
    Rule.prototype.getManyPrefixFailure = function () { return 'The selector of the directive "%s" should have one of the prefixes: %s (https://goo.gl/uacjKR)'; };
    return Rule;
}(selectorNameBase_1.SelectorRule));
exports.Rule = Rule;
