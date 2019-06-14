/*
 * Autogenerated by schematics
 */
import { HostBinding, Input } from '@angular/core';

export abstract class IconBase {
  /**
   * Configure the size of the SVG.
   * 'grow' will allow the SVG to grow or shrink to the parent size.
   * 'fixed' will apply the default width and height of the SVG.
   * 'small' will apply 24px as width and height.
   * 'medium' will apply 36px as width and height.
   * 'large' will apply 48px as width and height.
   * Defaults to 'grow'.
   */
  @Input() size:
    | 'grow'
    | 'fixed'
    | 'small'
    | 'small-grow'
    | 'medium'
    | 'medium-grow'
    | 'large'
    | 'large-grow' = 'grow';
  /**
   * Width of the icon.
   */
  @Input()
  @HostBinding('style.width')
  get width() {
    return this._resolveDimension(this._inputWidth, this._dimension.width);
  }
  set width(value: string) {
    this._inputWidth = this._coerceDimensionValue(value);
    if (!this._inputHeight && !value.endsWith('%')) {
      this._inputHeight = this._resolveInput(value, v => v / this._dimension.ratio);
    }
  }
  /**
   * Height of the icon.
   */
  @Input()
  @HostBinding('style.height')
  get height() {
    return this._resolveDimension(this._inputHeight, this._dimension.height);
  }
  set height(value: string) {
    this._inputHeight = this._coerceDimensionValue(value);
    if (!this._inputWidth && !value.endsWith('%')) {
      this._inputWidth = this._resolveInput(value, v => v * this._dimension.ratio);
    }
  }
  /**
   * The given CSS class or classes will be applied to the SVG element.
   */
  @Input() svgClass = '';
  @HostBinding('style.display') get display() {
    return this._isFixed() || this._inputHeight || this._inputWidth ? 'inline-block' : undefined;
  }
  /** @docs-private */
  @HostBinding('class.sbb-icon-component') sbbIconComponent = true;
  private _inputWidth: string;
  private _inputHeight: string;

  constructor(
    private readonly _dimension: {
      width: string;
      height: string;
      ratio: number;
    }
  ) {}

  private _isFixed() {
    return !this.size.endsWith('grow');
  }

  private _resolveDimension(growSize: string, fixedSize: string) {
    if (this.size === 'fixed') {
      return fixedSize;
    } else if (this.size === 'small') {
      return '24px';
    } else if (this.size === 'medium') {
      return '36px';
    } else if (this.size === 'large') {
      return '48px';
    } else {
      return growSize;
    }
  }

  private _coerceDimensionValue(value: string) {
    return Number.isNaN(+value) ? value : `${value}px`;
  }

  private _resolveInput(input: string, operation: (value: number) => number) {
    const match = /(\d*\.\d+|\d+)(\w*)/g.exec(input);
    return match && match[1] ? `${operation(Number(match[1]))}${match[2] || 'px'}` : undefined;
  }
}
