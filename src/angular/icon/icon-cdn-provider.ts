import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ErrorHandler, InjectionToken, Optional, SkipSelf } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { SbbIconRegistry } from './icon-registry';

/**
 * This providers registers all icons added below, which can then be used with <sbb-icon>.
 * Example:
 *   `
 *     .addSvgIconInNamespace(
 *       'namespace-example',
 *       'icon-example',
 *       sanitizer.bypassSecurityTrustResourceUrl('url/to/icon.svg')
 *     )
 *   `
 *   `<sbb-icon svgIcon="namespace-example:icon-example"></sbb-icon>`
 *
 * Register this in your AppModule:
 *   `
 *     @NgModule({
 *       ...
 *       providers: [
 *         ...
 *         SBB_ICON_REGISTRY_PROVIDER
 *       ]
 *     })
 *     export class AppModule {
 *       ...
 *   `
 */
export const SBB_ICON_REGISTRY_PROVIDER = {
  // If there is already an SbbIconRegistry available, use that. Otherwise, provide a new one.
  provide: SbbIconRegistry,
  deps: [
    [new Optional(), new SkipSelf(), SbbIconRegistry],
    [new Optional(), HttpClient],
    DomSanitizer,
    ErrorHandler,
    [new Optional(), DOCUMENT as InjectionToken<any>],
  ],
  useFactory: SBB_ICON_REGISTRY_PROVIDER_FACTORY,
};

/**
 * Generated from version v1.14.0 of the icon CDN.
 * Icons that are not needed by your app and are not @sbb-esta required icons (see list below) can be removed.
 *
 * You can also add additional icons from your assets:
 *   `
 *     .addSvgIconInNamespace(
 *       'my-icons',
 *       'lego',
 *       sanitizer.bypassSecurityTrustResourceUrl('/assets/path/to/your/icon/in/assets/directory.svg')
 *     )
 *   `
 *   `<sbb-icon svgIcon="my-icons:lego"></sbb-icon>`
 *   or without namespace
 *   `
 *     .addSvgIcon(
 *       'lego',
 *       sanitizer.bypassSecurityTrustResourceUrl('/assets/path/to/your/icon/in/assets/directory.svg')
 *     )
 *   `
 *   `<sbb-icon svgIcon="lego"></sbb-icon>`
 *
 * You can also self-host the CDN icons, by downloading the icons from the Icon CDN (https://icons.app.sbb.ch)
 * and adapting the url.
 *
 * @docs-private
 */
export function SBB_ICON_REGISTRY_PROVIDER_FACTORY(
  parentRegistry: SbbIconRegistry,
  httpClient: HttpClient,
  sanitizer: DomSanitizer,
  errorHandler: ErrorHandler,
  document?: any
) {
  /*
   * @sbb-esta Required Icons
   * ========================
   * Our libraries require the following icons. If not otherwise configured,
   * the necessary icons will be loaded from the CDN.
   *
   * Icons:
   *  - @sbb-esta/angular-business/accordion: kom:chevron-right-small
   *  - @sbb-esta/angular-business/breadcrumb: kom:chevron-small-down-circle-small, kom:chevron-small-right-small
   *  - @sbb-esta/angular-business/checkbox: kom:tick-small
   *  - @sbb-esta/angular-business/chip: kom:cross-small
   *  - @sbb-esta/angular-business/contextmenu: kom:context-menu-small
   *  - @sbb-esta/angular-business/datepicker: kom:calendar-small, kom:chevron-small-left-small, kom:chevron-small-right-small
   *  - @sbb-esta/angular-business/file-selector: kom:document-image-small, kom:document-pdf-small, kom:document-sound-small, kom:document-standard-small, kom:document-text-small, kom:document-video-small, kom:document-zip-small, kom:trash-small, kom:upload-small
   *  - @sbb-esta/angular-business/header: kom:chevron-small-down-small, kom:chevron-small-left-small, kom:cross-small, kom:hamburger-menu-small
   *  - @sbb-esta/angular-business/links: kom:arrow-right-small, kom:download-small
   *  - @sbb-esta/angular-business/notification-toast: kom:cross-small
   *  - @sbb-esta/angular-business/notification: kom:circle-information-small, kom:cross-small, kom:sign-exclamation-point-small, kom:tick-small
   *  - @sbb-esta/angular-business/option: kom:tick-small
   *  - @sbb-esta/angular-business/pagination: kom:chevron-small-left-circle-small, kom:chevron-small-left-small, kom:chevron-small-right-circle-small, kom:chevron-small-right-small
   *  - @sbb-esta/angular-business/processflow: kom:chevron-right-small
   *  - @sbb-esta/angular-business/select: kom:chevron-right-small, kom:chevron-small-down-small
   *  - @sbb-esta/angular-business/sidebar: kom:arrow-right-small, kom:chevron-small-left-circle-small, kom:cross-small, kom:hamburger-menu-small
   *  - @sbb-esta/angular-business/status: kom:cross-small, kom:exclamation-point-small, kom:tick-small
   *  - @sbb-esta/angular-business/tooltip: kom:circle-question-mark-small, kom:cross-small
   *  - @sbb-esta/angular-business/usermenu: kom:chevron-right-small, kom:chevron-small-down-small, kom:user-small
   *  - @sbb-esta/angular-public/accordion: kom:chevron-right-small, kom:minus-small, kom:plus-small
   *  - @sbb-esta/angular-public/breadcrumb: kom:chevron-small-down-circle-small, kom:chevron-small-right-small
   *  - @sbb-esta/angular-public/checkbox-panel: kom:tick-small
   *  - @sbb-esta/angular-public/checkbox: kom:tick-small
   *  - @sbb-esta/angular-public/datepicker: kom:calendar-small, kom:chevron-small-left-small, kom:chevron-small-right-small
   *  - @sbb-esta/angular-public/file-selector: kom:document-image-small, kom:document-pdf-small, kom:document-sound-small, kom:document-standard-small, kom:document-text-small, kom:document-video-small, kom:document-zip-small, kom:trash-small, kom:upload-small
   *  - @sbb-esta/angular-public/ghettobox: fpl:info, kom:arrow-long-right-small, kom:cross-small
   *  - @sbb-esta/angular-public/links: kom:arrow-right-small, kom:download-small
   *  - @sbb-esta/angular-public/notification: kom:circle-information-small, kom:sign-exclamation-point-small, kom:tick-small
   *  - @sbb-esta/angular-public/option: kom:tick-small
   *  - @sbb-esta/angular-public/pagination: kom:chevron-small-left-circle-small, kom:chevron-small-left-small, kom:chevron-small-right-circle-small, kom:chevron-small-right-small
   *  - @sbb-esta/angular-public/processflow: kom:chevron-right-small
   *  - @sbb-esta/angular-public/search: kom:magnifying-glass-small
   *  - @sbb-esta/angular-public/select: kom:chevron-right-small, kom:chevron-small-down-small
   *  - @sbb-esta/angular-public/tooltip: kom:circle-question-mark-small, kom:cross-small
   *  - @sbb-esta/angular-public/usermenu: kom:chevron-right-small, kom:chevron-small-down-small, kom:user-small
   *  - @sbb-esta/angular/accordion: kom:chevron-right-small, kom:minus-small, kom:plus-small
   *  - @sbb-esta/angular/breadcrumb: kom:house-small
   *  - @sbb-esta/angular/file-selector: kom:document-image-small, kom:document-pdf-small, kom:document-sound-small, kom:document-standard-small, kom:document-text-small, kom:document-video-small, kom:document-zip-small, kom:trash-small, kom:upload-small
   *  - @sbb-esta/angular/menu: kom:chevron-small-right-small
   *  - @sbb-esta/angular/select: kom:chevron-right-small, kom:chevron-small-down-small
   *  - @sbb-esta/angular/sidebar: kom:arrow-right-small, kom:chevron-small-left-circle-small, kom:cross-small, kom:hamburger-menu-small
   *  - @sbb-esta/angular/status: kom:cross-small, kom:exclamation-point-small, kom:tick-small
   */
  const registry =
    parentRegistry || new SbbIconRegistry(httpClient, sanitizer, document, errorHandler);
  const cdnUrl = 'https://icons.app.sbb.ch';
  const namespacedIcons = [
    {
      namespace: 'fpl',
      icons: [
        'sa-1',
        'sa-2',
        'sa-aa',
        'sa-abteilkinderwagen',
        'sa-af',
        'sa-at',
        'sa-aw',
        'sa-b',
        'sa-bb',
        'sa-be',
        'sa-bi',
        'sa-bk',
        'sa-bl',
        'sa-br',
        'sa-bs',
        'sa-bv',
        'sa-bz',
        'sa-cc',
        'sa-ds',
        'sa-dz',
        'sa-ep',
        'sa-fa',
        'sa-fl',
        'sa-fs',
        'sa-fw',
        'sa-fz',
        'sa-gk',
        'sa-gl',
        'sa-gn',
        'sa-gp',
        'sa-gr',
        'sa-gx',
        'sa-gz',
        'sa-hk',
        'sa-hn',
        'sa-ii',
        'sa-je',
        'sa-kb',
        'sa-kw',
        'sa-lc',
        'sa-le',
        'sa-me',
        'sa-mi',
        'sa-mo',
        'sa-mp',
        'sa-nf',
        'sa-nj',
        'sa-nv',
        'sa-ob',
        'sa-om',
        'sa-p',
        'sa-pa',
        'sa-ph',
        'sa-pl',
        'sa-pr',
        'sa-r',
        'sa-rb',
        'sa-rc',
        'sa-re',
        'sa-rq',
        'sa-rr',
        'sa-rs',
        'sa-rt',
        'sa-ry',
        'sa-rz',
        'sa-s',
        'sa-sb',
        'sa-sc',
        'sa-sd',
        'sa-sf',
        'sa-sh',
        'sa-sk',
        'sa-sl',
        'sa-sm',
        'sa-sn',
        'sa-sv',
        'sa-sz',
        'sa-ta',
        'sa-tc',
        'sa-td',
        'sa-tf',
        'sa-tg',
        'sa-tk',
        'sa-tn',
        'sa-ts',
        'sa-tt',
        'sa-tx',
        'sa-uk',
        'sa-vb',
        'sa-vc',
        'sa-vi',
        'sa-vl',
        'sa-vn',
        'sa-vo',
        'sa-vp',
        'sa-vr',
        'sa-vs',
        'sa-vt',
        'sa-vx',
        'sa-wb',
        'sa-wl',
        'sa-wr',
        'sa-ws',
        'sa-wv',
        'sa-x',
        'sa-xp',
        'sa-xr',
        'sa-xt',
        'sa-y',
        'sa-yb',
        'sa-ym',
        'sa-yt',
        'sa-z',
        'sa-zm',
        'add-stop',
        'alternative',
        'cancellation',
        'construction',
        'delay',
        'disruption',
        'info',
        'missed-connection',
        'platform-change',
        'replacementbus',
        'reroute',
        'utilization-high',
        'utilization-low',
        'utilization-medium',
        'utilization-none',
        'product-bex',
        'product-cnl',
        'product-ec',
        'product-en',
        'product-gex',
        'product-ic-1',
        'product-ic-11',
        'product-ic-2',
        'product-ic-21',
        'product-ic-3',
        'product-ic-4',
        'product-ic-5',
        'product-ic-51',
        'product-ic-6',
        'product-ic-61',
        'product-ic-7',
        'product-ic-8',
        'product-ic-81',
        'product-ic-9',
        'product-ic',
        'product-ice',
        'product-icn',
        'product-ir-13',
        'product-ir-15',
        'product-ir-16',
        'product-ir-17',
        'product-ir-25',
        'product-ir-26',
        'product-ir-27',
        'product-ir-35',
        'product-ir-36',
        'product-ir-37',
        'product-ir-40',
        'product-ir-45',
        'product-ir-46',
        'product-ir-55',
        'product-ir-56',
        'product-ir-65',
        'product-ir-66',
        'product-ir-67',
        'product-ir-70',
        'product-ir-75',
        'product-ir-90',
        'product-ir-95',
        'product-ir',
        'product-nj',
        'product-pe',
        'product-re',
        'product-rj',
        'product-rjx',
        'product-rx',
        'product-sn',
        'product-tgv',
        'product-vae',
      ],
    },
    {
      namespace: 'kom',
      icons: [
        'binoculars-large',
        'bluetooth-disabled-large',
        'bluetooth-large',
        'calendar-large',
        'calendar-one-day-large',
        'certificate-ribbon-large',
        'chart-column-trend-large',
        'circle-information-large',
        'coins-large',
        'envelope-large',
        'envelope-open-large',
        'magnifying-glass-minus-large',
        'magnifying-glass-plus-large',
        'paper-aeroplane-large',
        'paper-clip-large',
        'piggy-bank-large',
        'rocket-large',
        'shopping-cart-large',
        'target-large',
        'warning-light-large',
        'circle-cross-large',
        'bulb-on-large',
        'handshake-large',
        'network-large',
        'two-speech-bubbles-large',
        'circle-triangle-square-large',
        'employees-sbb-large',
        'user-group-large',
        'clock-large',
        'percent-large',
        'punctuality-large',
        'switzerland-route-large',
        'hand-plus-circle-large',
        'lotus-large',
        'platform-large',
        'station-large',
        'gps-disabled-large',
        'gps-large',
        'location-pin-surrounding-area-power-plug-large',
        'laptop-smartphone-large',
        'smartphone-large',
        'bicycle-large',
        'bicycle-profile-user-group-circle-large',
        'car-profile-large',
        'car-profile-power-plug-large',
        'car-profile-sign-parking-large',
        'car-profile-user-group-circle-large',
        'sign-parking-large',
        'taxi-profile-large',
        'train-large',
        'train-profile-large',
        'adult-kids-large',
        'balloons-large',
        'christmas-tree-shopping-bag-large',
        'elephant-large',
        'ferris-wheel-large',
        'hiking-boot-large',
        'leaf-large',
        'locomotive-viaduct-large',
        'lucerne-chapel-bridge-large',
        'market-shopping-bag-large',
        'mountain-sun-large',
        'museum-large',
        'music-rock-hand-gesture-large',
        'railway-ship-large',
        'sledge-snowshoe-large',
        'soccer-ball-large',
        'sunshade-sun-sand-large',
        'three-adults-large',
        'train-ski-large',
        'two-adults-kid-large',
        'railway-switch-large',
        'train-signal-large',
        'train-tracks-large',
        'building-tree-large',
        'city-large',
        'curriculum-vitae-large',
        'hand-graduation-cap-large',
        'aerosol-can-medium',
        'alarm-clock-medium',
        'app-icon-medium',
        'apple-bag-medium',
        'backpack-medium',
        'banknotes-dollar-medium',
        'battery-level-empty-medium',
        'battery-level-high-medium',
        'battery-level-low-medium',
        'battery-level-medium-medium',
        'bell-disabled-medium',
        'bell-medium',
        'binoculars-medium',
        'bluetooth-disabled-medium',
        'bluetooth-medium',
        'browser-medium',
        'bucket-foam-broom-medium',
        'calendar-medium',
        'calendar-one-day-medium',
        'camera-medium',
        'certificate-ribbon-medium',
        'chart-column-medium',
        'chart-column-trend-medium',
        'chart-line-medium',
        'chart-pie-medium',
        'circle-information-medium',
        'circle-information-small-medium',
        'circle-play-medium',
        'circle-question-mark-medium',
        'coin-dollar-medium',
        'coins-medium',
        'contact-medium',
        'controls-medium',
        'cup-hot-medium',
        'cutlery-medium',
        'database-medium',
        'dog-medium',
        'download-large-data-medium',
        'download-medium',
        'download-small-data-medium',
        'entrance-medium',
        'envelope-medium',
        'envelope-open-medium',
        'exit-medium',
        'face-king-medium',
        'face-worker-medium',
        'factory-medium',
        'filter-medium',
        'filter-x-medium',
        'flashlight-on-medium',
        'form-medium',
        'fullscreen-medium',
        'gears-medium',
        'gift-medium',
        'globe-medium',
        'gun-medium',
        'hand-fingers-snap-medium',
        'hand-heart-medium',
        'hand-with-service-bell-medium',
        'heart-medium',
        'hierarchy-medium',
        'lighthouse-medium',
        'link-external-medium',
        'link-medium',
        'list-medium',
        'magnifying-glass-medium',
        'magnifying-glass-minus-medium',
        'magnifying-glass-plus-medium',
        'mug-hot-medium',
        'narcotic-medium',
        'newspaper-medium',
        'paper-aeroplane-medium',
        'paper-clip-medium',
        'pen-medium',
        'picture-medium',
        'piggy-bank-medium',
        'pin-medium',
        'rss-medium',
        'service-bell-medium',
        'shopping-cart-medium',
        'sign-exclamation-point-medium',
        'sign-x-medium',
        'smartphone-shaking-medium',
        'spanner-medium',
        'star-medium',
        'switzerland-medium',
        'tag-medium',
        'target-medium',
        'torch-medium',
        'trash-medium',
        'tree-medium',
        'upload-medium',
        'wallet-medium',
        'warning-light-medium',
        'wifi-disabled-medium',
        'wifi-medium',
        'arrow-circle-medium',
        'arrow-down-medium',
        'arrow-long-left-medium',
        'arrow-long-right-medium',
        'arrow-right-medium',
        'arrows-circle-medium',
        'arrows-left-right-down-up-medium',
        'arrows-left-right-medium',
        'arrows-right-left-medium',
        'arrows-up-down-medium',
        'chevron-left-medium',
        'chevron-right-medium',
        'chevron-small-down-circle-medium',
        'chevron-small-down-medium',
        'chevron-small-left-circle-medium',
        'chevron-small-left-medium',
        'chevron-small-right-circle-medium',
        'chevron-small-right-medium',
        'chevron-small-up-circle-medium',
        'chevron-small-up-medium',
        'increase-size-medium',
        'reduce-size-medium',
        'button-power-medium',
        'circle-cross-medium',
        'circle-tick-medium',
        'clipboard-cross-medium',
        'clipboard-question-mark-medium',
        'clipboard-tick-medium',
        'exclamation-point-medium',
        'eye-disabled-medium',
        'eye-medium',
        'lock-closed-medium',
        'lock-open-medium',
        'question-mark-medium',
        'tick-medium',
        'circle-minus-medium',
        'circle-plus-medium',
        'context-menu-medium',
        'cross-medium',
        'drag-medium',
        'hamburger-menu-medium',
        'house-medium',
        'layers-medium',
        'minus-medium',
        'nine-squares-medium',
        'plus-medium',
        'two-finger-tap-medium',
        'bulb-off-medium',
        'bulb-on-medium',
        'face-grinning-medium',
        'face-neutral-medium',
        'face-sad-medium',
        'face-smiling-medium',
        'handshake-medium',
        'network-medium',
        'onboarding-medium',
        'question-answer-medium',
        'share-medium',
        'speech-bubble-group-empty-medium',
        'speech-bubble-medium',
        'thumb-down-medium',
        'thumb-up-medium',
        'translate-medium',
        'two-speech-bubbles-medium',
        'avatar-police-medium',
        'circle-triangle-square-medium',
        'id-card-employee-medium',
        'key-medium',
        'pie-medium',
        'two-users-medium',
        'user-change-medium',
        'user-group-medium',
        'user-group-round-table-medium',
        'user-group-row-medium',
        'user-hat-medium',
        'user-headset-medium',
        'user-key-medium',
        'user-medium',
        'user-plus-medium',
        'user-tie-medium',
        'document-check-medium',
        'document-image-medium',
        'document-lock-medium',
        'document-pdf-medium',
        'document-plus-medium',
        'document-ppt-medium',
        'document-sbb-medium',
        'document-signature-medium',
        'document-sound-medium',
        'document-standard-medium',
        'document-text-medium',
        'document-video-medium',
        'document-xls-medium',
        'document-zip-medium',
        'folder-info-medium',
        'folder-lock-medium',
        'folder-open-arrow-medium',
        'folder-open-medium',
        'folder-plus-medium',
        'metadata-medium',
        'two-folders-medium',
        'arrow-change-horizontal-medium',
        'arrow-change-medium',
        'avatar-train-staff-disabled-medium',
        'avatar-train-staff-medium',
        'clock-medium',
        'hourglass-medium',
        'locomotive-medium',
        'percent-medium',
        'percent-tag-medium',
        'punctuality-medium',
        'route-circle-end-medium',
        'route-circle-start-medium',
        'seat-window-medium',
        'switzerland-route-medium',
        'timetable-medium',
        'walk-fast-medium',
        'walk-medium',
        'walk-slow-medium',
        'wheelchair-inaccessible-medium',
        'wheelchair-medium',
        'wheelchair-partially-medium',
        'wheelchair-reservation-medium',
        'wheelchair-uncertain-medium',
        'half-fare-card-medium',
        'qrcode-disabled-medium',
        'qrcode-disabled-two-tickets-medium',
        'qrcode-medium',
        'qrcode-two-tickets-medium',
        'swisspass-medium',
        'swisspass-temporary-medium',
        'ticket-day-medium',
        'ticket-disabled-medium',
        'ticket-heart-medium',
        'ticket-journey-medium',
        'ticket-moon-star-medium',
        'ticket-parking-medium',
        'ticket-percent-medium',
        'ticket-route-medium',
        'ticket-star-medium',
        'tickets-class-medium',
        'book-medium',
        'bottle-apple-medium',
        'customer-assistance-sbb-medium',
        'escalator-medium',
        'general-display-medium',
        'hand-plus-circle-medium',
        'hand-sbb-medium',
        'hostel-medium',
        'lift-medium',
        'locker-medium',
        'lotus-medium',
        'meeting-point-medium',
        'money-exchange-medium',
        'platform-display-medium',
        'ramp-user-medium',
        'screen-inside-train-medium',
        'shirt-shoe-medium',
        'shopping-bag-coupon-medium',
        'shopping-bag-fast-medium',
        'shopping-bag-medium',
        'stairs-user-medium',
        'station-medium',
        'station-surrounding-area-medium',
        'ticket-machine-medium',
        'ticket-machine-ticket-medium',
        'toilet-medium',
        'train-station-medium',
        'waiting-room-medium',
        'wine-cheese-medium',
        'arrow-compass-medium',
        'gps-disabled-medium',
        'gps-medium',
        'location-pin-a-medium',
        'location-pin-b-medium',
        'location-pin-map-medium',
        'location-pin-medium',
        'location-pin-pulse-surrounding-area-medium',
        'location-pin-surrounding-area-medium',
        'location-pin-surrounding-area-power-plug-medium',
        'mountain-minus-medium',
        'mountain-plus-medium',
        'archive-box-medium',
        'briefcase-medium',
        'brochure-medium',
        'cash-register-medium',
        'desk-adjustable-medium',
        'desk-medium',
        'display-medium',
        'highlighter-medium',
        'keyboard-medium',
        'laptop-medium',
        'laptop-smartphone-medium',
        'megaphone-medium',
        'microphone-medium',
        'office-chair-medium',
        'power-plug-medium',
        'printer-medium',
        'scanner-medium',
        'smartphone-medium',
        'speaker-medium',
        'suitcase-disabled-medium',
        'suitcase-medium',
        'telephone-gsm-medium',
        'telephone-receiver-medium',
        'walkie-talkie-medium',
        'weight-medium',
        'cloud-dense-fog-medium',
        'cloud-drops-medium',
        'cloud-drops-moon-medium',
        'cloud-fog-medium',
        'cloud-ice-medium',
        'cloud-lightning-medium',
        'cloud-lightning-moon-medium',
        'cloud-little-snow-moon-medium',
        'cloud-little-snow-sun-medium',
        'cloud-medium',
        'cloud-moon-medium',
        'cloud-rain-medium',
        'cloud-rain-snow-medium',
        'cloud-rain-snow-moon-medium',
        'cloud-rain-snow-sun-medium',
        'cloud-rain-sun-medium',
        'cloud-snow-lightning-medium',
        'cloud-snow-medium',
        'cloud-snow-moon-medium',
        'cloud-snow-sun-medium',
        'cloud-snowflake-medium',
        'cloud-snowflake-sun-medium',
        'cloud-strong-rain-moon-medium',
        'cloud-strong-rain-sun-medium',
        'cloud-sun-medium',
        'cloud-sunshine-medium',
        'fog-medium',
        'moon-medium',
        'sun-moon-medium',
        'sunrise-medium',
        'sunshine-medium',
        'weather-unknown-medium',
        'fast-forward-medium',
        'next-medium',
        'pause-medium',
        'play-medium',
        'previous-medium',
        'record-medium',
        'rewind-medium',
        'stop-medium',
        'airplane-medium',
        'bicycle-medium',
        'bicycle-profile-user-group-circle-medium',
        'bike-profile-power-plug-medium',
        'bike-profile-sign-parking-medium',
        'bus-medium',
        'bus-sbb-medium',
        'bus-stop-medium',
        'bus-surrounding-area-medium',
        'car-medium',
        'car-profile-medium',
        'car-profile-power-plug-medium',
        'car-profile-sign-parking-medium',
        'car-profile-user-group-circle-medium',
        'car-sign-parking-medium',
        'charging-station-medium',
        'combined-mobility-medium',
        'container-medium',
        'double-deck-wagon-medium',
        'driverless-bus-profile-medium',
        'freight-wagon-medium',
        'gear-changing-medium',
        'home-power-plug-medium',
        'k-r-medium',
        'microscooter-profile-medium',
        'microscooter-profile-power-plug-medium',
        'moving-bus-medium',
        'park-and-rail-medium',
        'petrol-station-medium',
        'scooter-profile-medium',
        'scooter-profile-power-plug-medium',
        'shuttle-medium',
        'sign-parking-medium',
        'taxi-medium',
        'taxi-profile-medium',
        'train-medium',
        'train-profile-medium',
        'tram-medium',
        'wagon-medium',
        'walk-large-medium',
        'mountain-sun-medium',
        'skis-ski-poles-medium',
        'sunshade-sun-sand-medium',
        'construction-medium',
        'railway-switch-medium',
        'train-signal-medium',
        'train-tracks-medium',
        'city-medium',
        'ship-steering-wheel-medium',
        'aerosol-can-small',
        'alarm-clock-small',
        'app-icon-small',
        'apple-bag-small',
        'backpack-small',
        'banknotes-dollar-small',
        'battery-level-empty-small',
        'battery-level-high-small',
        'battery-level-low-small',
        'battery-level-medium-small',
        'bell-disabled-small',
        'bell-small',
        'binoculars-small',
        'bluetooth-disabled-small',
        'bluetooth-small',
        'browser-small',
        'bucket-foam-broom-small',
        'calendar-one-day-small',
        'calendar-small',
        'camera-small',
        'certificate-ribbon-small',
        'chart-column-small',
        'chart-column-trend-small',
        'chart-line-small',
        'chart-pie-small',
        'circle-information-small-small',
        'circle-information-small',
        'circle-play-small',
        'circle-question-mark-small',
        'coin-dollar-small',
        'coins-small',
        'contact-small',
        'controls-small',
        'cup-hot-small',
        'cutlery-small',
        'database-small',
        'dog-small',
        'download-large-data-small',
        'download-small-data-small',
        'download-small',
        'entrance-small',
        'envelope-open-small',
        'envelope-small',
        'exit-small',
        'face-king-small',
        'face-worker-small',
        'factory-small',
        'filter-small',
        'filter-x-small',
        'flashlight-on-small',
        'form-small',
        'fullscreen-small',
        'gears-small',
        'gift-small',
        'globe-small',
        'gun-small',
        'hand-fingers-snap-small',
        'hand-heart-small',
        'hand-with-service-bell-small',
        'heart-small',
        'hierarchy-small',
        'lighthouse-small',
        'link-external-small',
        'link-small',
        'list-small',
        'magnifying-glass-minus-small',
        'magnifying-glass-plus-small',
        'magnifying-glass-small',
        'mug-hot-small',
        'narcotic-small',
        'newspaper-small',
        'paper-aeroplane-small',
        'paper-clip-small',
        'pen-small',
        'picture-small',
        'piggy-bank-small',
        'pin-small',
        'rss-small',
        'service-bell-small',
        'shopping-cart-small',
        'sign-exclamation-point-small',
        'sign-x-small',
        'smartphone-shaking-small',
        'spanner-small',
        'star-small',
        'switzerland-small',
        'tag-small',
        'target-small',
        'torch-small',
        'trash-small',
        'tree-small',
        'upload-small',
        'wallet-small',
        'warning-light-small',
        'wifi-disabled-small',
        'wifi-small',
        'arrow-circle-small',
        'arrow-down-small',
        'arrow-long-left-small',
        'arrow-long-right-small',
        'arrow-right-small',
        'arrows-circle-small',
        'arrows-left-right-down-up-small',
        'arrows-left-right-small',
        'arrows-right-left-small',
        'arrows-up-down-small',
        'chevron-left-small',
        'chevron-right-small',
        'chevron-small-down-circle-small',
        'chevron-small-down-small',
        'chevron-small-left-circle-small',
        'chevron-small-left-small',
        'chevron-small-right-circle-small',
        'chevron-small-right-small',
        'chevron-small-up-circle-small',
        'chevron-small-up-small',
        'increase-size-small',
        'reduce-size-small',
        'button-power-small',
        'circle-cross-small',
        'circle-tick-small',
        'clipboard-cross-small',
        'clipboard-question-mark-small',
        'clipboard-tick-small',
        'exclamation-point-small',
        'eye-disabled-small',
        'eye-small',
        'lock-closed-small',
        'lock-open-small',
        'question-mark-small',
        'tick-small',
        'circle-minus-small',
        'circle-plus-small',
        'context-menu-small',
        'cross-small',
        'drag-small',
        'hamburger-menu-small',
        'house-small',
        'layers-small',
        'minus-small',
        'nine-squares-small',
        'plus-small',
        'two-finger-tap-small',
        'bulb-off-small',
        'bulb-on-small',
        'face-grinning-small',
        'face-neutral-small',
        'face-sad-small',
        'face-smiling-small',
        'handshake-small',
        'network-small',
        'onboarding-small',
        'question-answer-small',
        'share-small',
        'speech-bubble-group-empty-small',
        'speech-bubble-small',
        'thumb-down-small',
        'thumb-up-small',
        'translate-small',
        'two-speech-bubbles-small',
        'avatar-police-small',
        'circle-triangle-square-small',
        'id-card-employee-small',
        'key-small',
        'pie-small',
        'two-users-small',
        'user-change-small',
        'user-group-round-table-small',
        'user-group-row-small',
        'user-group-small',
        'user-hat-small',
        'user-headset-small',
        'user-key-small',
        'user-plus-small',
        'user-small',
        'user-tie-small',
        'document-check-small',
        'document-image-small',
        'document-lock-small',
        'document-pdf-small',
        'document-plus-small',
        'document-ppt-small',
        'document-sbb-small',
        'document-signature-small',
        'document-sound-small',
        'document-standard-small',
        'document-text-small',
        'document-video-small',
        'document-xls-small',
        'document-zip-small',
        'folder-info-small',
        'folder-lock-small',
        'folder-open-arrow-small',
        'folder-open-small',
        'folder-plus-small',
        'metadata-small',
        'two-folders-small',
        'arrow-change-horizontal-small',
        'arrow-change-small',
        'avatar-train-staff-disabled-small',
        'avatar-train-staff-small',
        'clock-small',
        'hourglass-small',
        'locomotive-small',
        'percent-small',
        'percent-tag-small',
        'punctuality-small',
        'route-circle-end-small',
        'route-circle-start-small',
        'seat-window-small',
        'switzerland-route-small',
        'timetable-small',
        'walk-fast-small',
        'walk-slow-small',
        'walk-small',
        'wheelchair-inaccessible-small',
        'wheelchair-partially-small',
        'wheelchair-reservation-small',
        'wheelchair-small',
        'wheelchair-uncertain-small',
        'half-fare-card-small',
        'qrcode-disabled-small',
        'qrcode-disabled-two-tickets-small',
        'qrcode-small',
        'qrcode-two-tickets-small',
        'swisspass-small',
        'swisspass-temporary-small',
        'ticket-day-small',
        'ticket-disabled-small',
        'ticket-heart-small',
        'ticket-journey-small',
        'ticket-moon-star-small',
        'ticket-parking-small',
        'ticket-percent-small',
        'ticket-route-small',
        'ticket-star-small',
        'tickets-class-small',
        'book-small',
        'bottle-apple-small',
        'customer-assistance-sbb-small',
        'escalator-small',
        'general-display-small',
        'hand-plus-circle-small',
        'hand-sbb-small',
        'hostel-small',
        'lift-small',
        'locker-small',
        'lotus-small',
        'meeting-point-small',
        'money-exchange-small',
        'platform-display-small',
        'ramp-user-small',
        'screen-inside-train-small',
        'shirt-shoe-small',
        'shopping-bag-coupon-small',
        'shopping-bag-fast-small',
        'shopping-bag-small',
        'stairs-user-small',
        'station-small',
        'station-surrounding-area-small',
        'ticket-machine-small',
        'ticket-machine-ticket-small',
        'toilet-small',
        'train-station-small',
        'waiting-room-small',
        'wine-cheese-small',
        'arrow-compass-small',
        'gps-disabled-small',
        'gps-small',
        'location-pin-a-small',
        'location-pin-b-small',
        'location-pin-map-small',
        'location-pin-pulse-surrounding-area-small',
        'location-pin-small',
        'location-pin-surrounding-area-power-plug-small',
        'location-pin-surrounding-area-small',
        'mountain-minus-small',
        'mountain-plus-small',
        'archive-box-small',
        'briefcase-small',
        'brochure-small',
        'cash-register-small',
        'desk-adjustable-small',
        'desk-small',
        'display-small',
        'highlighter-small',
        'keyboard-small',
        'laptop-small',
        'laptop-smartphone-small',
        'megaphone-small',
        'microphone-small',
        'office-chair-small',
        'power-plug-small',
        'printer-small',
        'scanner-small',
        'smartphone-small',
        'speaker-small',
        'suitcase-disabled-small',
        'suitcase-small',
        'telephone-gsm-small',
        'telephone-receiver-small',
        'walkie-talkie-small',
        'weight-small',
        'cloud-dense-fog-small',
        'cloud-drops-moon-small',
        'cloud-drops-small',
        'cloud-fog-small',
        'cloud-ice-small',
        'cloud-lightning-moon-small',
        'cloud-lightning-small',
        'cloud-little-snow-moon-small',
        'cloud-little-snow-sun-small',
        'cloud-moon-small',
        'cloud-rain-small',
        'cloud-rain-snow-moon-small',
        'cloud-rain-snow-small',
        'cloud-rain-snow-sun-small',
        'cloud-rain-sun-small',
        'cloud-small',
        'cloud-snow-lightning-small',
        'cloud-snow-moon-small',
        'cloud-snow-small',
        'cloud-snow-sun-small',
        'cloud-snowflake-small',
        'cloud-snowflake-sun-small',
        'cloud-strong-rain-moon-small',
        'cloud-strong-rain-sun-small',
        'cloud-sun-small',
        'cloud-sunshine-small',
        'fog-small',
        'moon-small',
        'sun-moon-small',
        'sunrise-small',
        'sunshine-small',
        'weather-unknown-small',
        'fast-forward-small',
        'next-small',
        'pause-small',
        'play-small',
        'previous-small',
        'record-small',
        'rewind-small',
        'stop-small',
        'airplane-small',
        'bicycle-profile-user-group-circle-small',
        'bicycle-small',
        'bike-profile-power-plug-small',
        'bike-profile-sign-parking-small',
        'bus-sbb-small',
        'bus-small',
        'bus-stop-small',
        'bus-surrounding-area-small',
        'car-profile-power-plug-small',
        'car-profile-sign-parking-small',
        'car-profile-small',
        'car-profile-user-group-circle-small',
        'car-sign-parking-small',
        'car-small',
        'charging-station-small',
        'combined-mobility-small',
        'container-small',
        'double-deck-wagon-small',
        'driverless-bus-profile-small',
        'freight-wagon-small',
        'gear-changing-small',
        'home-power-plug-small',
        'k-r-small',
        'microscooter-profile-power-plug-small',
        'microscooter-profile-small',
        'moving-bus-small',
        'park-and-rail-small',
        'petrol-station-small',
        'scooter-profile-power-plug-small',
        'scooter-profile-small',
        'shuttle-small',
        'sign-parking-small',
        'taxi-profile-small',
        'taxi-small',
        'train-profile-small',
        'train-small',
        'tram-small',
        'wagon-small',
        'walk-large-small',
        'mountain-sun-small',
        'skis-ski-poles-small',
        'sunshade-sun-sand-small',
        'construction-small',
        'railway-switch-small',
        'train-signal-small',
        'train-tracks-small',
        'city-small',
        'ship-steering-wheel-small',
      ],
    },
  ];
  for (const entry of namespacedIcons) {
    for (const icon of entry.icons) {
      registry.addSvgIconInNamespace(
        entry.namespace,
        icon,
        sanitizer.bypassSecurityTrustResourceUrl(`${cdnUrl}/${entry.namespace}/${icon}.svg`)
      );
    }
  }
  return registry;
}
