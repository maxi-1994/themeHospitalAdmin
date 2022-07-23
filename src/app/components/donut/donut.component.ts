import { Component, Input } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styles: ['.chart-container { display: block; width: 400px; height: 400px; margin: auto; }'],
})
export class DonutComponent {

  @Input() title: string = 'No Title'
  @Input('dataConfig') doughnutChartData: ChartData<'doughnut'> | undefined;

  constructor() {
   }
}
