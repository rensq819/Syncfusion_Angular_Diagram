import { Component, OnInit, ViewChild } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {
  vendorList: any[];
  displayedColumns = ['Vendor', 'Price', 'Sold To', 'Date of Purchase'];
  dataSource = new MatTableDataSource;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:3000/api/vendor')
    .subscribe(data => {
      let temp = data[0] as Array<any>;

      // remove _id from json
      delete temp["_id"];
      this.vendorList = Object.values(temp);

      // sort by lowest price and slice top 10
      this.vendorList.sort((a, b) => a.price - b.price);
      this.vendorList = this.vendorList.slice(0, 10);
      this.dataSource = new MatTableDataSource(this.vendorList);
    });    
  }
}
