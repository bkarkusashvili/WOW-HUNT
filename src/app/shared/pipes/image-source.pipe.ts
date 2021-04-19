import { Pipe, PipeTransform } from '@angular/core';

type Folders = 'global' | 'home';

@Pipe({
  name: 'imageSource'
})
export class ImageSourcePipe implements PipeTransform {

  transform(filename: string, folder: Folders = 'global'): string {
    return `/assets/images/${folder}/${filename}`;
  }

}
