import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageSourcePipe } from './pipes/image-source.pipe';
import { HeadlineComponent } from './components/headline/headline.component';

@NgModule({
  declarations: [
    ImageSourcePipe,
    HeadlineComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ImageSourcePipe,
    HeadlineComponent,
  ]
})
export class SharedModule { }
