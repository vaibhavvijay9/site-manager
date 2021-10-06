import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss']
})
export class DoughnutChartComponent implements OnInit {

  @Input() consumed: any = '0';
  @Input() total: any = '0';
  @Input() inputType: any;      // NUMBER, STRING

  consumedCount: number = 0;
  totalCount: number = 0;
  percentage: any = '0%';

  @ViewChild('radialProgress') radialProgress: any;


  constructor() { }


  ngOnInit(): void { 
  }


  ngAfterViewInit() {
    if(this.inputType === 'STRING') {
      this.consumedCount = (this.consumed).match(/\d+/)[0];
      this.totalCount = (this.total).match(/\d+/)[0];
      this.percentage = (this.consumedCount / this.totalCount)*100 + '%';
    }
    else {
      this.percentage = (this.consumed / this.total)*100 + '%';
    }
    this.setProgress(this.percentage);
  }

  setProgress(progress: number) {
    const value = `${progress}`;
    this.radialProgress.nativeElement.style.setProperty('--progress', value)
    this.radialProgress.nativeElement.innerHTML = this.consumed +'/'+ this.total;
    this.radialProgress.nativeElement.setAttribute('aria-valuenow', value)
  }

}
