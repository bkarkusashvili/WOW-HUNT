import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  public list = [
    {
      pre: '',
      title: 'CASTLE NATHRIA',
      image: {
        main: 'service1.png',
        over: 'soul.png',
      },
      link: '/',
    },
    {
      pre: 'TOWER',
      title: 'TORGHAST',
      image: {
        main: 'service2.png',
        over: 'chain.png',
      },
      link: '/',
    },
    {
      pre: 'DUNGEONS',
      title: 'MYTHIC+',
      image: {
        main: 'service3.png',
        over: 'star.png',
      },
      link: '/',
    },
    {
      pre: 'PVP',
      title: 'RATING',
      image: {
        main: 'service4.png',
        over: 'pvp-rating.png',
      },
      link: '/',
    },
    {
      pre: 'POWER',
      title: 'LEVELING',
      image: {
        main: 'service5.png',
        over: 'crystal.png',
      },
      link: '/',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
