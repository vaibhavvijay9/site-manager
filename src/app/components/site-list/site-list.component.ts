import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'site-list',
  templateUrl: './site-list.component.html',
  styleUrls: ['./site-list.component.scss']
})
export class SiteListComponent implements OnInit {

  sitesList: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getAllData().subscribe(response => {
      this.sitesList = response;
    })
  }

}
