import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {

  public list = [
    {
      class: 'nathria',
      title: 'NATHRIA HEROIC',
      price: {
        prev: '€23',
        curr: '€23',
      },
      images: {
        main: 'offer1.png',
        bg: 'offer1-bg.png',
        bgHover: 'offer1-bg.png',
      }
    },
    {
      class: 'mythic',
      title: 'MYTHIC +15',
      price: {
        prev: '€23',
        curr: '€23',
      },
      images: {
        main: 'offer2.png',
        bg: 'offer2-bg.png',
        bgHover: 'offer2-bg.png',
      }
    },
    {
      class: 'arena',
      title: 'ARENA 3V3',
      price: {
        prev: '€23',
        curr: '€23',
      },
      images: {
        main: 'offer3.png',
        bg: 'offer3-bg.png',
        bgHover: 'offer3-bg.png',
      },
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
