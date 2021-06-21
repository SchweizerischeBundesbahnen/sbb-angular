import { ElementSelectorUpgradeData, TargetVersion, VersionChanges } from '@angular/cdk/schematics';

export const elementSelectors: VersionChanges<ElementSelectorUpgradeData> = {
  ['merge' as TargetVersion]: [
    {
      pr: '',
      changes: [
        {
          replace: 'sbb-option-group',
          replaceWith: 'sbb-optgroup',
        },
        {
          replace: 'sbb-dropdown',
          replaceWith: 'sbb-menu',
        },
        {
          replace: 'sbb-pagination',
          replaceWith: 'sbb-paginator',
        },
      ],
    },
  ],
};
