import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { EJComponents } from 'ej-angular2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  resize: boolean;
  button_display: boolean;
  
  @ViewChild('dialog') dialog: EJComponents <any, any>;
    constructor() {
    this.resize = false;
    this.button_display = false;
  }
  // Button click event handler to open the ejDialog
  onClick(event) {
   this.button_display = false;
   this.dialog.widget.element.ejDialog('open');
  }
  // Dialog close event handler
  onClose(event) {
    this.button_display = true;
  }
}
