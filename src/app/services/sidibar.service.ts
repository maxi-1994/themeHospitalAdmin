import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidibarService {

  menu: any[] = [
    {
      title: 'Dashboard',
      icon: 'mdi mdi-gauge',
      submenu: [
        { title: 'Main', url: '/' },
        { title: 'ProgressBar', url: 'progress' },
        { title: 'Charts', url: 'chart' },
        { title: 'Promesas', url: 'promesas' },
        { title: 'Rxjs', url: 'rxjs' },
      ]
    }
  ]

  constructor() { }
}
