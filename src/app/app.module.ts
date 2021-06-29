import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { ShellComponent } from './shell/shell.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  /*
  { path: ':gamertag', redirectTo: 'clips/:gamertag', pathMatch: 'full' },
  { path: 'clips/:gamertag', component: ClipsComponent },
  { path:'screenshots/:gamertag', component: ScreenshotsComponent }
  */
];

@NgModule({
  declarations: [
    ShellComponent
  ],
  imports: [
    BrowserModule,    
    BrowserAnimationsModule,
    
    MaterialModule,
    FormsModule,

    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [ ShellComponent ]
})
export class AppModule { }
