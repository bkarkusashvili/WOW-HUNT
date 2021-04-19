import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  public slides = [
    {
      image: 'slide1.jpg',
      title: 'CASTLE NATHRIA BOOST',
      text: 'GET YOUR BEST OF LOOT TODAY!',
      link: '/',
    },
    {
      image: 'slide2.jpg',
      title: 'MYTHIC+ BOOST',
      text: 'TEAMS ALWAYS READY TO START RIGHT NOW!',
      link: '/',
    },
    {
      image: 'slide3.jpg',
      title: 'TORGHAST BOOST',
      text: 'GET YOUR LEGENDARY ARMOR IN SHORT TIME!',
      link: '/',
    },
    {
      image: 'slide4.jpg',
      title: 'PVP BOOST',
      text: 'GET YOUR BEST OF LOOT TODAY!',
      link: '/',
    },
    {
      image: 'slide5.jpg',
      title: 'LEVEL BOOST',
      text: 'UPGRADE YOUR CHARACTERS TO THE MAXIMUM LEVEL!',
      link: '/',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
