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
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';

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
		MatListModule,
		MatTooltipModule,
		MatCardModule,
		MatExpansionModule,
		MatTableModule,
		MatSelectModule,
		MatDialogModule
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
		MatListModule,
		MatTooltipModule,
		MatCardModule,
		MatExpansionModule,
		MatTableModule,
		MatSelectModule,
		MatDialogModule
	]
})
export class MaterialModule {}