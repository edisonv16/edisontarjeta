import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import { Url } from 'url';

@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor(private domsanitizer:DomSanitizer) {}

  transform(value: string): SafeResourceUrl {

    return this.domsanitizer.bypassSecurityTrustResourceUrl(value);
  }

}
