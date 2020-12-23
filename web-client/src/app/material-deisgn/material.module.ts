import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDividerModule} from '@angular/material/divider';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {  MatInputModule } from '@angular/material/input';

@NgModule({
    imports: [
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatTabsModule,
        MatDividerModule,
        MatTooltipModule,
        MatSelectModule,
        MatFormFieldModule,
        MatInputModule,
      
    ],
    exports: [
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatTabsModule,
        MatDividerModule,
        MatTooltipModule,
        MatSelectModule,
        MatFormFieldModule,
        MatInputModule
    ]
})
export class MaterialModule {

}