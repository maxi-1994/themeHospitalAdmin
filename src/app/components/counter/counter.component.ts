import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styles: [
  ]
})
export class CounterComponent implements OnInit {
  @Input('value') progress: number = 0;
  @Input() btnClass: string = 'btn-primary';

  @Output() outputValue: EventEmitter<number> = new EventEmitter();

  ngOnInit(): void {
    this.btnClass = `btn ${ this.btnClass }`
  }

  changeValue(value: number) {
    if (this.progress >= 100 && value >= 0) {
      return this.progress = 100;
    }

    if (this.progress <= 0 && value < 0) {
      return this.progress = 0;
    }


    this.progress = this.progress + value
    this.outputValue.emit(this.progress);

    return this.progress;
  }

  onChange(value: number) {
    if (value >= 100) {
      this.progress = 100;
    } else if (value <= 0) {
      this.progress = 0;
    } else {
      this.progress = value;
    }

    this.outputValue.emit(this.progress);
  }

}
