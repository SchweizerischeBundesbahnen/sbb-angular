'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var schematics = require('@angular-devkit/schematics');
var core = require('@angular-devkit/core');
var rxjs = require('rxjs');
var operators = require('rxjs/operators');

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

class Svgo {
    constructor() {
        try {
            const svgo = require('svgo');
            this._svgo = new svgo({
                plugins: [
                    { cleanupAttrs: true },
                    { removeDoctype: true },
                    { removeXMLProcInst: true },
                    { removeComments: true },
                    { removeMetadata: true },
                    { removeTitle: true },
                    { removeDesc: true },
                    { removeUselessDefs: true },
                    { removeEditorsNSData: true },
                    { removeEmptyAttrs: true },
                    { removeHiddenElems: true },
                    { removeEmptyText: true },
                    { removeEmptyContainers: true },
                    { removeViewBox: false },
                    { cleanupEnableBackground: true },
                    { convertStyleToAttrs: true },
                    { convertColors: true },
                    { convertPathData: true },
                    { convertTransform: true },
                    { removeUnknownsAndDefaults: true },
                    { removeNonInheritableGroupAttrs: true },
                    { removeUselessStrokeAndFill: true },
                    { removeUnusedNS: true },
                    { cleanupIDs: true },
                    { cleanupNumericValues: true },
                    { moveElemsAttrsToGroup: true },
                    { moveGroupAttrsToElems: true },
                    { collapseGroups: true },
                    { removeRasterImages: false },
                    { mergePaths: true },
                    { convertShapeToPath: true },
                    { sortAttrs: true },
                    { removeDimensions: true },
                    { removeAttrs: { attrs: '(font-family)' } },
                ]
            });
        }
        catch (_a) {
            throw new schematics.SchematicsException('This schematics requires the svgo package!');
        }
    }
    /**
     * Normalizes SVG mark-up, optimizing the content for cross-browser compatibility.
     * [svgo](https://github.com/svg/svgo) library is used for the scope with configured options findable in svgo-configuration.ts
     * @param svg Source SVG mark-up
     * @return normalized SVG mark-up
     */
    static optimize(svg) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield Svgo._instance._svgo.optimize(svg);
            return data.trim();
        });
    }
}
Svgo._instance = new Svgo();

class SvgFile {
    constructor(name, modules, filepath, template, width, height, ratio) {
        this.name = name;
        this.modules = modules;
        this.filepath = filepath;
        this.template = template;
        this.width = width;
        this.height = height;
        this.ratio = ratio;
        this.size = '';
    }
    static from(filepath, entry) {
        return __awaiter(this, void 0, void 0, function* () {
            const lastSlashIndex = filepath.lastIndexOf('/');
            const name = filepath.substring(lastSlashIndex + 1, filepath.lastIndexOf('.'));
            const modules = filepath.substring(0, lastSlashIndex).split('/');
            const content = entry.content.toString('utf8');
            const template = (yield Svgo.optimize(content))
                .replace('<svg ', `<svg [attr.class]="'sbb-svg-icon ' + svgClass" `);
            const width = SvgFile._determineDimension(/( width="([^"]+)"| viewBox="\d+[ ,]+\d+[ ,]+(\d+)[ ,]+\d+")/g, content, filepath);
            const height = SvgFile._determineDimension(/( height="([^"]+)"| viewBox="\d+[ ,]+\d+[ ,]+\d+[ ,]+(\d+))"/g, content, filepath);
            return new SvgFile(name, modules, filepath, template, width, height, width / height);
        });
    }
    static _determineDimension(regex, content, filepath) {
        const match = regex.exec(content);
        if (!match) {
            throw new schematics.SchematicsException(`No width found in ${filepath}`);
        }
        return Number(match[2] || match[3]);
    }
}

const sizes = ['small', 'medium', 'large'];
const invalidModules = ['', 'svg', 'FPL', 'KOM', 'responsive', ...sizes];
const rules = [
    file => sizes
        .filter(size => file.name.endsWith(size))
        .forEach(size => file.size = size),
    file => file.modules = file.modules.filter(m => !invalidModules.includes(m)),
    file => file.modules = file.modules.map(m => m
        .replace(/^Attribut$/, 'TimetableAttributes')
        .replace(/^HIM_CUS$/, 'HimCus')
        .replace(/^Produkt$/, 'TimetableProducts')
        .replace(/^\d+_/, '')),
    file => file.name = file.name
        .replace(/^sbb_construction/, 'under_construction')
        .replace(/^fog_327/, 'cloud_fog_327')
        .replace(/^cloud_sun_197/, 'cloud_sunshine_197')
        .replace(/^user_group_row_056/, 'user_group_row_linear_056')
        .replace(/^bus_stop_242/, 'bus_sbb_242')
        .replace(/^sbb_(\d+\_)?/i, '')
        .replace(/_[ ]?\d+_(small|medium|large)$/, '')
        .replace(/^auslastung_0$/, 'utilization_none')
        .replace(/^auslastung_1$/, 'utilization_low')
        .replace(/^auslastung_2$/, 'utilization_medium')
        .replace(/^auslastung_3$/, 'utilization_high')
        .replace(/_/g, '-'),
    file => file.modules = file.modules.map((v, i, a) => `${a.slice(0, i).join('')}${v}`),
];
const namingRules = rules.map(r => (f) => {
    r(f);
    return f;
});

class IconModule {
    get sizes() { return this._files.map(f => f.size).filter(s => !!s).sort(); }
    constructor(_files) {
        this._files = _files.sort((a, b) => b.size.localeCompare(a.size));
        this.name = this._files[0].name;
        this.modules = this._files[0].modules.slice();
    }
    apply(directory) {
        const iconBaseImport = () => `${'../'.repeat(this.modules.length)}icon-base`;
        return schematics.mergeWith(schematics.apply(schematics.url('./files/icon'), [
            schematics.template(Object.assign({}, core.strings, { iconBaseImport }, this._files[0], (this._files.some(f => ['large', 'medium', 'small'].includes(f.size))
                ? { width: '24px', height: '24px', ratio: 1 } : undefined), (this._files.length > 1 ? { template: this._mergeTemplates() } : undefined))),
            schematics.move(directory.path)
        ]));
    }
    _mergeTemplates() {
        return this._files
            .reduce((current, next, i) => `${current}      ${next.template.replace('<svg ', i === 0
            ? '<svg *ngSwitchDefault '
            : `<svg *ngSwitchCase="size?.indexOf('${next.size}') === 0 ? size : ''" `)}\n`, '\n    <ng-container [ngSwitch]="size">\n')
            .replace(/$/, '    </ng-container>');
    }
}

const ICON_ROOT = 'root';
class IconCollectionModule {
    constructor(name = '') {
        this.name = name;
        this.icons = [];
        this.collections = [];
        this.filename = core.strings.dasherize(name || ICON_ROOT);
    }
    get iconsRecursive() {
        return [
            ...this.icons,
            ...this.collections.reduce((current, next) => [...current, ...next.iconsRecursive], [])
        ];
    }
    apply(root) {
        const directory = this.name ? root.dir(core.fragment(this.filename)) : root;
        return schematics.chain([
            schematics.mergeWith(schematics.apply(schematics.url('./files/collection'), [
                schematics.template(Object.assign({}, core.strings, this)),
                schematics.move(directory.path)
            ])),
            ...this.collections.map(c => c.apply(directory)),
            ...this.icons.map(i => i.apply(directory)),
        ]);
    }
}

class SvgSource {
    constructor(_files) {
        this._files = _files;
    }
    static from(svgDirectory) {
        return __awaiter(this, void 0, void 0, function* () {
            const files = [];
            svgDirectory.visit((path, entry) => {
                if (entry && path.endsWith('.svg')) {
                    files.push(SvgFile.from(path, entry));
                }
            });
            const resolvedFiles = (yield Promise.all(files))
                .map(f => namingRules.reduce((current, next) => next(current), f));
            return new SvgSource(resolvedFiles);
        });
    }
    assertNoDuplicates() {
        const duplicates = this._files
            .map((file, i, a) => i === a.findIndex(f => f.name === file.name && f.size === file.size)
            ? a.filter(f => f.name === file.name && f.size === file.size) : [])
            .filter(f => f.length > 1);
        if (duplicates.length) {
            const duplicateOutput = duplicates
                .map(d => d.map(f => `  ${f.name}: ${f.filepath}`).join('\n'))
                .join('\n');
            throw new schematics.SchematicsException(`\nDuplicates found:\n${duplicateOutput}`);
        }
        return this;
    }
    toCollectionModules() {
        const iconModules = this._toIconModules();
        const moduleTrees = iconModules
            .map(i => i.modules)
            .filter((v, i, a) => i === a.findIndex(vi => vi.join(',') === v.join(',')));
        const collectionMap = new Map();
        const rootCollection = new IconCollectionModule();
        for (const moduleTree of moduleTrees) {
            let collection = rootCollection;
            for (const moduleName of moduleTree) {
                let localCollection = collection.collections.find(c => c.name === moduleName);
                if (!localCollection) {
                    localCollection = new IconCollectionModule(moduleName);
                    collectionMap.set(moduleTree.join(','), localCollection);
                    collection.collections.push(localCollection);
                }
                collection = localCollection;
            }
        }
        // tslint:disable-next-line:no-non-null-assertion
        iconModules.forEach(i => collectionMap.get(i.modules.join(',')).icons.push(i));
        return rootCollection;
    }
    _toIconModules() {
        const svgMap = this._files
            .reduce((current, next) => current
            .set(next.name, [...(current.get(next.name) || []), next]), new Map());
        return Array.from(svgMap.values())
            .map(g => new IconModule(g));
    }
}

function generateIconModules(_options) {
    return (tree, _context) => rxjs.from((() => __awaiter(this, void 0, void 0, function* () {
        const collection = (yield SvgSource.from(tree.getDir('svg')))
            .assertNoDuplicates()
            .toCollectionModules();
        const dist = tree.getDir(_options.dist);
        const icons = collection.iconsRecursive;
        return schematics.chain([
            schematics.mergeWith(schematics.apply(schematics.url('./files/root'), [
                schematics.template(Object.assign({}, core.strings, { icons })),
                schematics.move(dist.path)
            ])),
            collection.apply(dist),
        ]);
    }))())
        .pipe(operators.switchMap(rule => schematics.callRule(rule, rxjs.of(tree), _context)));
}
/*

  return (tree: Tree, _context: SchematicContext): Observable<Tree> => combineLatest(
    of(
      mergeWith(
        apply(
          url('./files/root'), [
            template({
              ...strings,
            }),
            move(tree.getDir(_options.dist).path)
          ]))),
    from(SvgSource.from(tree.getDir('svg')))
      .pipe(
        map(s => s
          .assertNoDuplicates()
          .toCollectionModules()
          .apply(tree.getDir(_options.dist)))),
    (...rules) => chain(rules))
    .pipe(switchMap(rule => callRule(rule, of(tree), _context)));
*/
/*
return combineLatest(
  of(dist)
    .pipe(map(d => {
      const rootTemplate = url('./files/root');
      const parametrizedRootTemplate = apply(rootTemplate, [
        template({
          ...strings,
        }),
        move(d.path)
      ]);
      return mergeWith(parametrizedRootTemplate);
    })),
  from(SvgSource.from(tree.getDir('svg')))
    .pipe(
      map(s => s
        .assertNoDuplicates()
        .toCollectionModules()
        .apply(dist))),
  (rules) => chain(rules)
)
.pipe(map(() => tree));
*/
/*
 from(async () => {
    const collection = (await SvgSource.from(tree.getDir('svg')))
      .assertNoDuplicates()
      .toCollectionModules();
    const dist = tree.getDir(_options.dist);
    const rootTemplate = url('./files/root');
    const parametrizedRootTemplate = apply(rootTemplate, [
      template({
        ...strings,
      }),
      move(dist.path)
    ]);

    chain([
      mergeWith(parametrizedRootTemplate),
      collection.apply(dist),
    ])(tree, _context);
  }).pipe(map(() => tree));
*/

exports.generateIconModules = generateIconModules;
