import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete'; 
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatOptionModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon'; 
import { MatInputModule } from '@angular/material/input'; 
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

@NgModule({
	imports: [
		MatFormFieldModule,
		MatToolbarModule,
		MatSidenavModule,
		MatButtonModule,
		MatAutocompleteModule,
		MatOptionModule,
		MatIconModule,
		MatInputModule,
		MatListModule
	],
	exports: [
		MatFormFieldModule,
		MatToolbarModule,
		MatSidenavModule,
		MatButtonModule,
		MatAutocompleteModule,
		MatOptionModule,
		MatIconModule,
		MatInputModule,
		MatListModule
	]
})
export class MaterialModule {}