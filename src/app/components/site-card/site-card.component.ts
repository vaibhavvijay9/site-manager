import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'site-card',
  templateUrl: './site-card.component.html',
  styleUrls: ['./site-card.component.scss']
})
export class SiteCardComponent implements OnInit {

  @Input() siteData: any;

  constructor() { }

  ngOnInit(): void {
  }

}
