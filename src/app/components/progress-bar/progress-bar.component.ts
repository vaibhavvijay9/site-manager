import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  @Input() consumed: any = '0';
  @Input() total: any = '0';
  @Input() inputType: any;      // NUMBER, STRING

  consumedCount: number = 0;
  totalCount: number = 0;
  percentage: any = '0%';


  constructor() { }


  ngOnInit(): void {
    if(this.inputType === 'STRING') {
      this.consumedCount = (this.consumed).match(/\d+/)[0];
      this.totalCount = (this.total).match(/\d+/)[0];
      this.percentage = (this.consumedCount / this.totalCount)*100 + '%';
    }
    else {
      this.percentage = (this.consumed / this.total)*100 + '%';
    }
  }

}
