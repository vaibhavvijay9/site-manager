import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { DataService } from '../../services/data.service';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
@Component({
  selector: 'site-list',
  templateUrl: './site-list.component.html',
  styleUrls: ['./site-list.component.scss']
})
export class SiteListComponent implements OnInit {

  sitesList: any;
  recordsCount: any = 10;
  searchText: string = '';
  searchFilter = new Subject<string>();


  constructor(private dataService: DataService) {
    this.searchFilter.pipe(
      debounceTime(300),
      distinctUntilChanged())
      .subscribe(value => {
        this.getSearchResults(value);
      });
  }


  ngOnInit(): void {
    this.loadData();
  }


  loadData(data?: any) {
    let options: any = {
      limit : this.recordsCount == 'ALL' ? 100 : this.recordsCount
    }
    if(data && data.searchTerm)
      options['searchTerm'] = data.searchTerm;
    
    this.dataService.getAllData(options).subscribe(response => {
      this.sitesList = response;
    })
  }


  openModal() {
    this.dataService.setModalFlag(true);
  }


  refreshList(event : any) {
    if(event)
      this.loadData();
  }


  getSearchResults(value: any) {
    this.loadData({searchTerm: value});
  }

}
