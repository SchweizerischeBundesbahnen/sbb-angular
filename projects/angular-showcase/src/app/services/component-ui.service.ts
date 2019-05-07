import { Injectable } from '@angular/core';

import { AccordionShowcaseComponent } from '../examples/accordion-showcase/accordion-showcase.component';
import { AutocompleteShowcaseComponent } from '../examples/autocomplete-showcase/autocomplete-showcase.component';
import { BadgeShowcaseComponent } from '../examples/badge-showcase/badge-showcase.component';
import { BreadcrumbShowcaseComponent } from '../examples/breadcrumb-showcase/breadcrumb-showcase.component';
import { ButtonShowcaseComponent } from '../examples/button-showcase/button-showcase.component';
import { CaptchaShowcaseComponent } from '../examples/captcha-showcase/captcha-showcase.component';
import { CheckboxPanelShowcaseComponent } from '../examples/checkbox-panel-showcase/checkbox-panel-showcase.component';
import { CheckboxShowcaseComponent } from '../examples/checkbox-showcase/checkbox-showcase.component';
import { DatepickerShowcaseComponent } from '../examples/datepicker-showcase/datepicker-showcase.component';
import { DropdownShowcaseComponent } from '../examples/dropdown-showcase/dropdown-showcase.component';
import { FieldShowcaseComponent } from '../examples/field-showcase/field-showcase.component';
import { FileSelectorShowcaseComponent } from '../examples/file-selector-showcase/file-selector-showcase.component';
import { GhettoboxShowcaseComponent } from '../examples/ghettobox-showcase/ghettobox-showcase.component';
import { LightboxShowcaseComponent } from '../examples/lightbox-showcase/lightbox-showcase.component';
import { LinksShowcaseComponent } from '../examples/links-showcase/links-showcase.component';
import { LoadingShowcaseComponent } from '../examples/loading-showcase/loading-showcase.component';
import { NotificationShowcaseComponent } from '../examples/notification-showcase/notification-showcase.component';
import { PaginationShowcaseComponent } from '../examples/pagination-showcase/pagination-showcase.component';
import { ProcessflowShowcaseComponent } from '../examples/processflow-showcase/processflow-showcase.component';
import { RadioButtonPanelShowcaseComponent } from '../examples/radio-button-panel-showcase/radio-button-panel-showcase.component';
import { RadioButtonShowcaseComponent } from '../examples/radio-button-showcase/radio-button-showcase.component';
import { SearchShowcaseComponent } from '../examples/search-showcase/search-showcase.component';
import { SelectShowcaseComponent } from '../examples/select-showcase/select-showcase.component';
import { TableShowcaseComponent } from '../examples/table-showcase/table-showcase.component';
import { TabsShowcaseComponent } from '../examples/tabs-showcase/tabs-showcase.component';
import { TagShowcaseComponent } from '../examples/tag-showcase/tag-showcase.component';
import { TextareaShowcaseComponent } from '../examples/textarea-showcase/textarea-showcase.component';
import { TextexpandShowcaseComponent } from '../examples/textexpand-showcase/textexpand-showcase.component';
import { TimeInputShowcaseComponent } from '../examples/time-input-showcase/time-input-showcase.component';
import { ToggleShowcaseComponent } from '../examples/toggle-showcase/toggle-showcase.component';
import { TooltipShowcaseComponent } from '../examples/tooltip-showcase/tooltip-showcase.component';
import { UserMenuShowcaseComponent } from '../examples/usermenu-showcase/usermenu-showcase.component';
import { UiComponent } from '../shared/ui-component';

@Injectable({
  providedIn: 'root'
})
export class ComponentUiService {
  uiComponents: UiComponent[];

  constructor() {
    this.uiComponents = [
      new UiComponent(
        'Button',
        'button',
        'Button',
        'Button is an extension to standard input element with icons and theming.',
        true,
        false,
        ['Davide Aresta', 'Stefan Meili'],
        'Description goes here ...',
        'Source goes here ...',
        'Import text.',
        ButtonShowcaseComponent
      ),
      new UiComponent(
        'Table',
        'table',
        'Table',
        'Table is the successor of p-dataTable with a lightning fast performance (at least 10x faster) ' +
          'and excellent level of control over the presentation. p-table is called as TurboTable in order to ' +
          'differantiate if from the deprecated p-dataTable.',
        true,
        true,
        ['Davide Aresta', 'Stefan Meili'],
        'Description goes here ...',
        'Source goes here ...',
        'Import text.',
        TableShowcaseComponent
      ),
      new UiComponent(
        'Link',
        'links',
        'Link',
        null,
        true,
        false,
        ['Davide Aresta', `Stefan Meili, Dario D'Oronzo`],
        null,
        `<a href="#" sbbLink mode="normal" icon="arrow">Bezeichnung</a>
        <a href="#" sbbSocialLink icon="facebook">Bezeichnung</a>`,
        `import { LinksModule } from '@sbb-esta/angular-public';\n\n` +
          '@NgModule({\n  declarations: [\n    ...\n  ],\n  imports: [\n    ...\n    LinksModule\n  ]\n})\n' +
          'export class ExamplesModule { }',
        LinksShowcaseComponent
      ),
      new UiComponent(
        'Loading Indicator',
        'loading',
        'Loading Indicator',
        'Subtitel goes here ...',
        true,
        false,
        ['Davide Aresta', 'Stefan Meili'],
        'Description goes here ...',
        'Source goes here ...',
        'Import text.',
        LoadingShowcaseComponent
      ),
      new UiComponent(
        'Field',
        'field',
        'Field',
        'Describes an input field that can contain different values: text, password, number etc',
        true,
        false,
        ['Davide Genchi'],
        'Description goes here ...',
        'Source goes here ...',
        'Import text.',
        FieldShowcaseComponent
      ),
      new UiComponent(
        'Autocompletion',
        'autocomplete',
        'Autocompletion',
        'Subtitel goes here ...',
        true,
        false,
        ['Davide Aresta', 'Stefan Meili', `Dario D'Oronzo`],
        'Description goes here ...',
        'Source goes here ...',
        'Import text.',
        AutocompleteShowcaseComponent
      ),
      new UiComponent(
        'Text Area',
        'textarea',
        'Text Area',
        'Subtitel goes here ...',
        true,
        false,
        ['Davide Aresta', 'Stefan Meili'],
        'Description goes here ...',
        'Source goes here ...',
        'Import text.',
        TextareaShowcaseComponent
      ),
      new UiComponent(
        'Select',
        'select',
        'Select',
        'Subtitel goes here ...',
        true,
        true,
        ['Davide Aresta', 'Stefan Meili'],
        'Description goes here ...',
        'Source goes here ...',
        'Import text.',
        SelectShowcaseComponent
      ),
      new UiComponent(
        'Date Picker',
        'datepicker',
        'Date Picker',
        'Subtitel goes here ...',
        true,
        true,
        ['Davide Aresta', 'Stefan Meili'],
        'Description goes here ...',
        'Source goes here ...',
        'Import text.',
        DatepickerShowcaseComponent
      ),
      new UiComponent(
        'Breadcrumb',
        'breadcrumb',
        'Breadcrumb',
        'Subtitel goes here ...',
        true,
        true,
        [],
        'Description goes here ...',
        'Source goes here ...',
        'Import text.',
        BreadcrumbShowcaseComponent
      ),
      new UiComponent(
        'Radio Button',
        'radio-button',
        'Radio Button',
        null,
        true,
        false,
        ['Davide Aresta', 'Stefan Meili'],
        'Description goes here ...',
        'Source goes here ...',
        'Import text.',
        RadioButtonShowcaseComponent
      ),
      new UiComponent(
        'Checkbox',
        'checkbox',
        'Checkbox',
        'Subtitel goes here ...',
        true,
        false,
        ['Davide Aresta', 'Stefan Meili', `Dario D'Oronzo`],
        'Description goes here ...',
        'Source goes here ...',
        'Import text.',
        CheckboxShowcaseComponent
      ),
      new UiComponent(
        'Tab',
        'tabs',
        'Tab',
        'Subtitel goes here ...',
        true,
        false,
        ['Davide Aresta', 'Marco Sut', 'Stefan Meili'],
        'Description goes here ...',
        'Source goes here ...',
        'Import text.',
        TabsShowcaseComponent
      ),
      new UiComponent(
        'Accordion',
        'accordion',
        'Accordion',
        'Subtitel goes here ...',
        true,
        true,
        ['Davide Aresta', 'Stefan Meili'],
        'Description goes here ...',
        'Source goes here ...',
        'Import text.',
        AccordionShowcaseComponent
      ),
      new UiComponent(
        'Badge',
        'badge',
        'Badge',
        'Subtitel goes here ...',
        true,
        true,
        ['Davide Aresta'],
        'Description goes here ...',
        'Source goes here ...',
        'Import text.',
        BadgeShowcaseComponent
      ),
      new UiComponent(
        'Pagination',
        'pagination',
        'Pagination',
        'Subtitel goes here ...',
        true,
        true,
        ['Davide Aresta', 'Marco Sut', 'Davide Genchi'],
        'Description goes here ...',
        'Source goes here ...',
        'Import text.',
        PaginationShowcaseComponent
      ),
      new UiComponent(
        'Light Box',
        'lightbox',
        'Light Box',
        'Subtitel goes here ...',
        true,
        true,
        ['Davide Aresta', 'Stefan Meili'],
        'Description goes here ...',
        'Source goes here ...',
        'Import text.',
        LightboxShowcaseComponent,
        ['content-1', 'content-2', 'content-3']
      ),
      new UiComponent(
        'Notification',
        'notification',
        'Notification',
        'Subtitel goes here ...',
        true,
        true,
        ['Davide Aresta', 'Stefan Meili'],
        'Description goes here ...',
        'Source goes here ...',
        'Import text.',
        NotificationShowcaseComponent
      ),
      new UiComponent(
        'Process Flow',
        'processflow',
        'Process Flow',
        'Subtitel goes here ...',
        true,
        true,
        ['Davide Aresta', 'Stefan Meili'],
        'Description goes here ...',
        'Source goes here ...',
        'Import text.',
        ProcessflowShowcaseComponent
      ),
      new UiComponent(
        'Radio Button Panel',
        'radio-button-panel',
        'Radio Button Panel',
        'Subtitel goes here ...',
        true,
        true,
        ['Davide Aresta'],
        'Description goes here ...',
        'Source goes here ...',
        'Import text.',
        RadioButtonPanelShowcaseComponent
      ),
      new UiComponent(
        'Checkbox Panel',
        'checkbox-panel',
        'Checkbox Panel',
        'Subtitel goes here ...',
        true,
        true,
        ['Davide Aresta'],
        'Description goes here ...',
        'Source goes here ...',
        'Import text.',
        CheckboxPanelShowcaseComponent
      ),
      new UiComponent(
        'Time Input',
        'time-input',
        'Time Input',
        'Subtitel goes here ...',
        true,
        false,
        ['Davide Aresta', 'Stefan Meili', `Dario D'Oronzo`],
        'Description goes here ...',
        'Source goes here ...',
        'Import text.',
        TimeInputShowcaseComponent
      ),
      new UiComponent(
        'Toggle button',
        'toggle',
        'Toggle button',
        'Subtitel goes here ...',
        true,
        false,
        [],
        'Description goes here ...',
        'Source goes here ...',
        'Import text.',
        ToggleShowcaseComponent
      ),
      new UiComponent(
        'Tooltip',
        'tooltip',
        'Tooltip',
        'Subtitel goes here ...',
        true,
        false,
        ['Davide Aresta', 'Stefan Meili', `Dario D'Oronzo`],
        'Description goes here ...',
        'Source goes here ...',
        'Import text.',
        TooltipShowcaseComponent
      ),
      new UiComponent(
        'Text Expand',
        'textexpand',
        'Text Expand',
        'Subtitel goes here ...',
        true,
        false,
        ['Davide Aresta', 'Marco Sut', 'Davide Genchi'],
        'Description goes here ...',
        'Source goes here ...',
        'Import text.',
        TextexpandShowcaseComponent
      ),
      new UiComponent(
        'Tag',
        'tag',
        'Tag',
        'Subtitel goes here ...',
        true,
        false,
        [''],
        'Description goes here ...',
        'Source goes here ...',
        'Import text.',
        TagShowcaseComponent
      ),
      new UiComponent(
        'Search',
        'search',
        'Search',
        'Subtitel goes here ...',
        true,
        false,
        [''],
        'Description goes here ...',
        'Source goes here ...',
        'Import text.',
        SearchShowcaseComponent
      ),
      new UiComponent(
        'Captcha',
        'captcha',
        'Captcha',
        'Subtitel goes here ...',
        true,
        false,
        [''],
        'Description goes here ...',
        'Source goes here ...',
        'Import text.',
        CaptchaShowcaseComponent
      ),
      new UiComponent(
        'Dropdown',
        'dropdown',
        'Dropdown',
        'Subtitel goes here ...',
        true,
        false,
        [''],
        'Description goes here ...',
        'Source goes here ...',
        'Import text.',
        DropdownShowcaseComponent
      ),
      new UiComponent(
        'User Menu',
        'usermenu',
        'User Menu',
        'Subtitel goes here ...',
        true,
        false,
        [''],
        'Description goes here ...',
        'Source goes here ...',
        'Import text.',
        UserMenuShowcaseComponent
      ),
      new UiComponent(
        'File Selector',
        'file-selector',
        'File Selector',
        'Subtitel goes here ...',
        true,
        false,
        [''],
        'Description goes here ...',
        'Source goes here ...',
        'Import text.',
        FileSelectorShowcaseComponent
      ),
      new UiComponent(
        'Ghettobox',
        'ghettobox',
        'Ghettobox',
        'Subtitel goes here ...',
        true,
        false,
        [''],
        'Description goes here ...',
        'Source goes here ...',
        'Import text.',
        GhettoboxShowcaseComponent
      )
    ];
  }

  getUiComponentByRouterLink(name: any): UiComponent {
    return this.uiComponents.find(
      uiComponent => uiComponent.routerLink === name
    );
  }

  getUiComponentsBySearchValue(searchValue: any): Array<UiComponent> {
    let foundUiComponents: UiComponent[] = [];
    if (searchValue.length > 0) {
      foundUiComponents = this.uiComponents.filter(
        uiComponent =>
          uiComponent.routerLink
            .toLowerCase()
            .indexOf(searchValue.toLowerCase()) > -1
      );
    } else {
      foundUiComponents = this.uiComponents;
    }

    const newFoundUiComponents: UiComponent[] = [];
    foundUiComponents.forEach(function(item) {
      newFoundUiComponents.push(
        new UiComponent(
          item.id,
          item.routerLink,
          item.title,
          item.subTitle,
          item.isComponent,
          item.isDirective,
          item.authors,
          item.description,
          item.source,
          item.importText
        )
      );
    });

    for (const uiComponent of newFoundUiComponents) {
      if (
        uiComponent.id.toLowerCase().indexOf(searchValue.toLowerCase()) > -1
      ) {
        const index = uiComponent.id
          .toLowerCase()
          .indexOf(searchValue.toLowerCase());
        const preFix = uiComponent.id.substring(0, index);
        const sufFix = uiComponent.id.substring(index + searchValue.length);
        const searchText = uiComponent.id.substring(
          index,
          index + searchValue.length
        );
        const newId = preFix + '<b>' + searchText + '</b>' + sufFix;
        uiComponent.id = newId;
      }
    }

    return newFoundUiComponents.sort((a, b) => a.id.localeCompare(b.id));
  }

  getAll(): Array<UiComponent> {
    return this.uiComponents.sort((a, b) => a.id.localeCompare(b.id));
  }

  getAllAsString(): Array<string> {
    const routerLinks: string[] = [];
    for (const uiComponent of this.uiComponents) {
      routerLinks.push(uiComponent['routerLink']);
    }
    return routerLinks;
  }
}
