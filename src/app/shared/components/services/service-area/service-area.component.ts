import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-service-area',
  imports: [CommonModule,RouterModule],
  templateUrl: './service-area.component.html',
  styleUrl: './service-area.component.scss',
})
export class ServiceAreaComponent {
  
  serviceData = [
    {
      id: 1,
      img: '/assets/img/service/service3-1.png',
      date: '',
      time: '',
      match: '',
      title: 'Xbox',
      views: '',
      game: '',
      groups: '',
    },
    {
      id: 2,
      img: '/assets/img/service/service3-2.png',
      date: '',
      time: '',
      match: '',
      title: 'Nintendo',
      views: '',
      game: '',
      groups: '',
    },
    {
      id: 3,
      img: '/assets/img/service/service3-3.png',
      date: '',
      time: '',
      match: '',
      title: 'Playstation',
      views: '',
      game: '',
      groups: '',
    },
    {
      id: 3,
      img: '/assets/img/service/service3-3.png',
      date: '',
      time: '',
      match: '',
      title: 'PC',
      views: '',
      game: '',
      groups: '',
    }
  ];
}
