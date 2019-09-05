'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@angular-devkit/core');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function public2business(_options) {
    return (tree, _context) => __awaiter(this, void 0, void 0, function* () {
        [
            'accordion',
            'autocomplete',
            'datepicker',
            'field',
            'input',
            'option',
            'radio-button',
            'select',
            'textarea',
            'time-input'
        ].forEach(m => copyAndAdaptPublicModule(tree, m));
    });
}
function copyAndAdaptPublicModule(tree, moduleName) {
    const publicDir = tree.getDir(`projects/sbb-esta/angular-public/${moduleName}`);
    const businessDir = tree.getDir(`projects/sbb-esta/angular-business/${moduleName}`);
    publicDir.visit((path, entry) => {
        if (entry) {
            const targetPath = core.join(businessDir.path, core.relative(publicDir.path, path));
            const content = adaptFile(entry);
            if (tree.exists(targetPath)) {
                tree.overwrite(targetPath, content);
            }
            else {
                tree.create(targetPath, content);
            }
        }
    });
    const warningFile = core.join(businessDir.path, 'AUTOGENERATED_DO_NOT_MODIFY');
    if (!tree.exists(warningFile)) {
        tree.create(warningFile, 'See schematics/public2business');
    }
}
function adaptFile(entry) {
    const content = entry.content.toString('utf8');
    if (entry.path.endsWith('.scss')) {
        return `$sbbBusiness: true;\n\n${content}`;
    }
    else if (entry.path.endsWith('.ts')) {
        return content.replace(/@sbb-esta\/angular-public/g, '@sbb-esta/angular-business');
    }
    else {
        return content;
    }
}

exports.public2business = public2business;
