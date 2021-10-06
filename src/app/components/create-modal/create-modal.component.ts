import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-modal',
  templateUrl: './create-modal.component.html',
  styleUrls: ['./create-modal.component.scss']
})
export class CreateModalComponent implements OnInit {

  isModalOpen : any;
  @ViewChild('modalRef') modalRef: any;
  @Output() dataUpdated = new EventEmitter();

  addDataForm:any;
  submitted = false;


  constructor(private dataService: DataService, private formBuilder: FormBuilder) {
    dataService.getModalFlag().subscribe(data => {
      this.isModalOpen = data;
      if(data)
        this.openModal();
    });
  }


  ngOnInit(): void {
    this.addDataForm = this.formBuilder.group({
      domainName: ['', Validators.required],
      storage: ['', Validators.required],
      subdomains: new FormArray([]),
      monthlyVisitor: ['', [Validators.required]]
    });
  }


  get f() { return this.addDataForm.controls; }
  get subdomains() { return this.addDataForm.get('subdomains') as FormArray; }


  addSubdomainRow() {
    this.subdomains.push(new FormControl(''));
  }

  removeSubdomainRow(index: number) {
    this.subdomains.removeAt(index);
  }


  openModal() {
    this.submitted = false;
    this.addDataForm.reset();
    this.subdomains.clear();
    this.addSubdomainRow();
    this.modalRef.nativeElement.style.display = "block";
  }


  closeModal() {
    this.dataService.setModalFlag(false);
    this.modalRef.nativeElement.style.display = "none";
  }


  onSubmit() {
    this.submitted = true;

    if (this.addDataForm.invalid) {
      return;
    }

    let subdomain:any = [];
    if(this.f.subdomains.value && this.f.subdomains.value.length > 0) {
      (this.f.subdomains.value).forEach((element: any) => {
        if(element && element.length > 0) {
          let obj = {
            "name": element,
            "usedStorage": "10gb",
            "domainTag": "Staging",
            "montlyVisitor": 700
          };
          subdomain.push(obj);
        }
      });
    }

    let postData = {
      "domain": this.f.domainName.value,
      "storage": this.f.storage.value + 'gb',
      "usedStorage": Math.floor(((this.f.storage.value).match(/\d+/)[0]) / 4) + 'gb',
      "domainTag": "Primary",
      "subdomain": subdomain,
      "status": "Active",
      "availableDomains": 10,
      "usedDomains": 1,
      "monthlyVisitorCapacity": this.f.monthlyVisitor.value,
      "montlyVisitor": Math.floor(this.f.monthlyVisitor.value / 3)
    };

    this.dataService.addData(postData).subscribe(response => {
      if(response) {
        this.closeModal();
        this.dataUpdated.emit(true);
      }
    })
  }

}
