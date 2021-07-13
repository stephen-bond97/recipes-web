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

  public populateTestData(): void {
    this.storageHelper.AddNewItem({
      Title: "Chilli Pizza", Description: "Very spicy very nice", Ingredients: "cheese and tomato and chilli", Steps: "asdadsasdasd"
    });

    this.storageHelper.AddNewItem({
      Title: "Chicken", Description: "tastes like chicken", Ingredients: "chicken", Steps: "asdadsasdasd"
    });

    this.storageHelper.AddNewItem({
      Title: "tikka masala", Description: "indian food", Ingredients: "coconut, yoghurt, chilli", Steps: "asdadsasdasd"
    });

    this.storageHelper.AddNewItem({
      Title: "chicken balls", Description: "unreal", Ingredients: "chicken and balls", Steps: "asdadsasdasd"
    });
  }
}
