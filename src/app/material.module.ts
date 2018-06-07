import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatExpansionModule, MatIconModule, MatDividerModule, MatSortModule, MatTableModule, 
    MatTooltipModule} from '@angular/material';

@NgModule({
    imports: [MatButtonModule, MatToolbarModule, MatExpansionModule, MatIconModule, MatDividerModule, MatSortModule, MatTableModule,
        MatTooltipModule],
    exports: [MatButtonModule, MatToolbarModule, MatExpansionModule, MatIconModule, MatDividerModule, MatSortModule, MatTableModule,
        MatTooltipModule],
})
export class MaterialModule { }