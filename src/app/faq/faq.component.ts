import { Component, OnInit } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  content: any[];
  faq: any[];

  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.http.get('http://localhost:3000/api/faq')
    .subscribe(data => {
      let temp = data[0] as Array<any>;
      this.content = Object.values(temp["children"]);   
      this.faq = Object.values(this.content[0]["children"]); 
    })
  }

}
