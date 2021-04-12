# Migration Guide

This guide should help you migrate from `@sbb-esta/angular-public`, `@sbb-esta/angular-business`
and `@sbb-esta/angular-core` to `@sbb-esta/angular`.

`@sbb-esta/angular` now contains all modules in either `standard` (previously public),
`lean` (previously business) or in both variants. If a module is only available for either
`standard` or `lean`, but not both, it will have an notification at the top of the documentation.
The default variant is `standard`. To use the `lean` variant, add the `sbb-lean` CSS class to the
`html` element (e.g. `<html class="sbb-lean" ...>`).

Most of the breaking changes should automatically be migrated via `ng update`
(see our [How to update](howtoupdate) guide).

Please [reach out to us](https://github.com/sbb-design-systems/sbb-angular/issues/new/choose), if
one of these changes breaks your project in a non-recoverable way.

### Secondary Entrypoints

_Automatic migration available_

The re-export from root (e.g. `import { SbbButtonModule } from '@sbb-esta/angular-public';`) has
been removed. All symbols have to be imported from the respective
module (e.g. `import { SbbButtonModule } from '@sbb-esta/angular/button';`).

### Button

_Automatic migration available_

The button module has been refactored from the ground up. The `sbbButton` selector with the `mode`
input has been split into separate selectors.

| Previously                              | New                             |
| --------------------------------------- | ------------------------------- |
| `<button sbbButton>`                    | `<button sbb-button>`           |
| `<button sbbButton mode="primary">`     | `<button sbb-button>`           |
| `<button sbbButton mode="secondary">`   | `<button sbb-secondary-button>` |
| `<button sbbButton mode="ghost">`       | `<button sbb-ghost-button>`     |
| `<button sbbButton mode="frameless">`   | `<button sbb-frameless-button>` |
| `<button sbbButton mode="alternative">` | `<button sbb-alt-button>`       |
| `<button sbbButton mode="icon">`        | `<button sbb-icon-button>`      |

Support for custom icon has been changed. Previously the `*sbbIcon` directive could be used,
which is no longer supported. The button component now provides an `indicatorIcon` input, for which
[any supported](angular/icon-overview) (or self registered) icon can be used.

[Documentation](angular/components/button)

### Checkbox Panel

_Automatic migration available_

The checkbox panel module structure has been refactored. The `label` and `subtitle` inputs have
been changed to content projection and the `sbbIcon` content projection has been replaced with
the generic `<sbb-checkbox-panel-note>` wrapper.

**Previous**

```html
<sbb-checkbox-panel label="Example Label" subtitle="Subtitle">
  <sbb-icon svgIcon="kom:heart-small" sbbIcon></sbb-icon>
</sbb-checkbox-panel>
```

**New**

```html
<sbb-checkbox-panel subtitle="">
  Example Label
  <sbb-checkbox-panel-subtitle>Subtitle</sbb-checkbox-panel-subtitle>
  <sbb-checkbox-panel-note
    ><sbb-icon svgIcon="kom:heart-small" sbbIcon></sbb-icon
  ></sbb-checkbox-panel-note>
</sbb-checkbox-panel>
```

[Documentation](angular/components/checkbox-panel)

### File Selector

_Automatic migration available_

The `FileTypeCategory` enum has been changed to a string literal type.

[Documentation](angular/components/file-selector)

### Links

_Automatic migration available_

The link module has been integrated into the button module. All button types can be used on both
`<a>` and `<button>`. The `sbbLink` selector has been renamed to `sbb-link`.

[Documentation](angular/components/button)

### Radio Button Panel

_Automatic migration available_

The radio button panel module structure has been refactored. The `label` and `subtitle` inputs have
been changed to content projection and the `sbbIcon` content projection has been replaced with
the generic `<sbb-radio-button-panel-note>` wrapper.

**Previous**

```html
<sbb-radio-button-panel label="Example Label" subtitle="Subtitle">
  <sbb-icon svgIcon="kom:heart-small" sbbIcon></sbb-icon>
</sbb-radio-button-panel>
```

**New**

```html
<sbb-radio-button-panel subtitle="">
  Example Label
  <sbb-radio-button-panel-subtitle>Subtitle</sbb-radio-button-panel-subtitle>
  <sbb-radio-button-panel-note
    ><sbb-icon svgIcon="kom:heart-small" sbbIcon></sbb-icon
  ></sbb-radio-button-panel-note>
</sbb-radio-button-panel>
```

[Documentation](angular/components/radio-button-panel)