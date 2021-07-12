import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { ShellComponent } from './shell/shell.component';
import { FormsModule } from '@angular/forms';
import { HomePage } from './pages/home/home.page';
import { RecipeListPage } from './pages/recipe-list/recipe-list.page';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PlannerPage } from './pages/planner/planner.page';
import { RandomRecipePage } from './pages/random-recipe/random-recipe.page';
import { RecipePage } from './pages/recipe/recipe.page';
import { StorageHelperService } from './services/storage-helper.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePage },

  { path: 'recipes', component: RecipeListPage },

  { path: 'planner', component: PlannerPage },

  { path: 'random-recipe', component: RandomRecipePage },

  { path: 'recipe/:recipe-name', component: RecipePage }
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
    RecipeListPage,
    ToolbarComponent,
    ProfileComponent,
    PlannerPage,
    RandomRecipePage,
    RecipePage,
  ],
  imports: [
    BrowserModule,    
    BrowserAnimationsModule,
    
    MaterialModule,
    FormsModule,

    RouterModule.forRoot(routes)
  ],
  providers: [ StorageHelperService ],
  bootstrap: [ ShellComponent ]
})
export class AppModule { }
