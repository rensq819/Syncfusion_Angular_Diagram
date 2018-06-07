import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiagramComponent } from './diagram/diagram.component';
import { FaqComponent } from './faq/faq.component';
import { VendorComponent } from './vendor/vendor.component';

const routes: Routes = [
  { path: 'dashboard', component: DiagramComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'vendor', component: VendorComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
  
})

export class AppRoutingModule {}
