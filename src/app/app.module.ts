import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { ShellComponent } from './shell/shell.component';
import { FormsModule } from '@angular/forms';
import { HomePage } from './pages/home/home.page';
import { RecipeListPage } from './pages/recipe-list/recipe-list.page';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePage },

  { path: 'recipes', component: RecipeListPage },
  /*
  { path: ':gamertag', redirectTo: 'clips/:gamertag', pathMatch: 'full' },
  { path: 'clips/:gamertag', component: ClipsComponent },
  { path:'screenshots/:gamertag', component: ScreenshotsComponent }
  */
];

@NgModule({
  declarations: [
    ShellComponent,
    HomePage,
    RecipeListPage
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
