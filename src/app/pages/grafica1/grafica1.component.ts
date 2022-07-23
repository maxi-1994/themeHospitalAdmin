import { Component } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  public chartData: ChartData<'doughnut'> = {
    labels: [ 'Pan', 'Harina', 'Facturas' ],
    datasets: [
              //Pan, Harina, Facturas
      { data: [ 350, 450, 100 ] },
      { data: [ 50, 150, 120 ] },
      { data: [ 250, 130, 70 ] }
    ]
  };

  public chartData2: ChartData<'doughnut'> = {
    labels: [ 'Sal', 'Azucar', 'Polvo Hornear' ],
    datasets: [
              //Sal, Azucar, Polvo Hornea
      { data: [ 100, 150, 200 ] },
    ]
  };


  constructor() { }
}
