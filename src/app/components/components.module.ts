import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { NgChartsModule } from 'ng2-charts';

import { CounterComponent } from './counter/counter.component';
import { DonutComponent } from './donut/donut.component';




@NgModule({
  declarations: [
    CounterComponent,
    DonutComponent,
  ],
  exports: [
    CounterComponent,
    DonutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgChartsModule
  ]
})
export class ComponentsModule { }
