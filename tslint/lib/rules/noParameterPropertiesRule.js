/**
 * @license
 * Copyright 2013 Palantir Technologies, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Lint = require("../index");
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        _super.apply(this, arguments);
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithWalker(new NoParameterPropertiesWalker(sourceFile, this.getOptions()));
    };
    /* tslint:disable:object-literal-sort-keys */
    Rule.metadata = {
        ruleName: "no-parameter-properties",
        description: "Disallows parameter properties in class constructors.",
        rationale: (_a = ["\n            Parameter properties can be confusing to those new to TS as they are less explicit\n            than other ways of declaring and initializing class members."], _a.raw = ["\n            Parameter properties can be confusing to those new to TS as they are less explicit\n            than other ways of declaring and initializing class members."], Lint.Utils.dedent(_a)),
        optionsDescription: "Not configurable.",
        options: null,
        optionExamples: ["true"],
        type: "style",
        typescriptOnly: true,
    };
    /* tslint:enable:object-literal-sort-keys */
    Rule.FAILURE_STRING_FACTORY = function (ident) {
        return "Property '" + ident + "' cannot be declared in the constructor";
    };
    return Rule;
    var _a;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
var NoParameterPropertiesWalker = (function (_super) {
    __extends(NoParameterPropertiesWalker, _super);
    function NoParameterPropertiesWalker() {
        _super.apply(this, arguments);
    }
    NoParameterPropertiesWalker.prototype.visitConstructorDeclaration = function (node) {
        var parameters = node.parameters;
        for (var _i = 0, parameters_1 = parameters; _i < parameters_1.length; _i++) {
            var parameter = parameters_1[_i];
            if (parameter.modifiers != null && parameter.modifiers.length > 0) {
                var errorMessage = Rule.FAILURE_STRING_FACTORY(parameter.name.text);
                var lastModifier = parameter.modifiers[parameter.modifiers.length - 1];
                var position = lastModifier.getEnd() - parameter.getStart();
                this.addFailure(this.createFailure(parameter.getStart(), position, errorMessage));
            }
        }
        _super.prototype.visitConstructorDeclaration.call(this, node);
    };
    return NoParameterPropertiesWalker;
}(Lint.RuleWalker));
exports.NoParameterPropertiesWalker = NoParameterPropertiesWalker;
