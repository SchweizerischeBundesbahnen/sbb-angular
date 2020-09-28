import {
  animate,
  AnimationTriggerMetadata,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

/** Time and timing curve for ghettobox animations. */
export const SBB_GHETTOBOX_PANEL_ANIMATION_TIMING = '0.25s cubic-bezier(0.4,0.0,0.2,1)';
export const SBB_GHETTOBOX_PANEL_ONDELETE_TIMING = '0.8s cubic-bezier(0.4,0.0,0.2,1)';

/** Animations used by ghettobox. */
export const SBB_GHETTOBOX_ANIMATIONS: {
  readonly addDelete: AnimationTriggerMetadata;
} = {
  /** Animation that apply when add and delete a ghettobox. */
  addDelete: trigger('addDelete', [
    state('void', style({ marginTop: '-100%' })),
    state('added', style({ marginTop: '0' })),
    state('deleted', style({ marginTop: '-100%' })),
    transition('void => added', animate(SBB_GHETTOBOX_PANEL_ANIMATION_TIMING)),
    transition('added => deleted', animate(SBB_GHETTOBOX_PANEL_ONDELETE_TIMING)),
  ]),
};
