import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { SwiperModule } from 'swiper/angular';

import { HomeComponent } from './home.component';
import { SliderComponent } from './components/slider/slider.component';
import { OffersComponent } from './components/offers/offers.component';
import { ServiceComponent } from './components/service/service.component';

@NgModule({
  declarations: [
    HomeComponent,
    SliderComponent,
    OffersComponent,
    ServiceComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    SwiperModule,
  ],
})
export class HomeModule { }
