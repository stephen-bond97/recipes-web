import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageHelperService } from 'src/app/services/storage-helper.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.page.html',
  styleUrls: ['./recipe-list.page.scss']
})
export class RecipeListPage implements OnInit {

  public recipes: Recipe[];

  constructor(private storageHelper: StorageHelperService, private router: Router) {
    this.recipes = storageHelper.Recipes;
  }

  ngOnInit(): void {
  }

  public handleRecipeSelected(recipe: Recipe): void {
    console.log(recipe);
    this.router.navigateByUrl("/recipe/pizza");
  }

}
