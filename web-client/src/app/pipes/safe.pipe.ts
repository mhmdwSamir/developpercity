import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeResourceUrl, SafeScript, SafeStyle, SafeUrl } from '@angular/platform-browser';

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {

 /**
   * @param _sanitizer: DomSanitezer
   */
  // tslint:disable-next-line
  constructor(protected _sanitizer: DomSanitizer) {
  }

  /**
   * @param value: string
   * @param type: string
   */
  transform(value: string, type: string): SafeHtml | SafeStyle | SafeScript | SafeUrl |    SafeResourceUrl {
    switch (type) {
      case 'html': {
        const html = this._sanitizer.bypassSecurityTrustHtml(value);
        console.log(html)
        return html
      }
      case 'style':
        return this._sanitizer.bypassSecurityTrustStyle(value);
      case 'script':
        return this._sanitizer.bypassSecurityTrustScript(value);
      case 'url':
        return this._sanitizer.bypassSecurityTrustUrl(value);
      case 'resourceUrl':
        return this._sanitizer.bypassSecurityTrustResourceUrl(value);
      default:
        return this._sanitizer.bypassSecurityTrustHtml(value);
    }
  }
}
