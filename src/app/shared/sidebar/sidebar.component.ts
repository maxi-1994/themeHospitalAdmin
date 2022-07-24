import { Component, OnInit } from '@angular/core';
import { SidibarService } from 'src/app/services/sidibar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  public itemsMenu!: any[];

  constructor(private sidibarService: SidibarService) {
    this.itemsMenu = this.sidibarService.menu;
  }

  ngOnInit(): void {
    console.log(this.itemsMenu);
  }

}
