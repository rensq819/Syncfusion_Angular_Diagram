import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatExpansionModule, MatIconModule } from '@angular/material';

@NgModule({
    imports: [MatButtonModule, MatToolbarModule, MatExpansionModule, MatIconModule],
    exports: [MatButtonModule, MatToolbarModule, MatExpansionModule, MatIconModule],
})
export class MaterialModule { }