import { Injectable } from '@angular/core';

@Injectable()

export class StorageHelperService {
  
  private recipes: Recipe[];

  constructor() {
    this.recipes = this.readLocalStorage();
  }

  public get Recipes(): Recipe[] {
    return this.recipes;
  }

  public AddNewItem(newItem: Recipe): Recipe {
    newItem.Id = this.generateId();
    newItem.CreatedOn = new Date();

    this.Recipes.push(newItem);
    this.writeLocalStorage(this.Recipes);

    return newItem;
  }

  public UpdateItem(updatedItem: Recipe): void {
    let itemToUpdate = this.Recipes.find(item => item.Id == updatedItem.Id);

    if (itemToUpdate === undefined) {
      return;
    }

    if (itemToUpdate) {
      itemToUpdate.Title = updatedItem.Title;
      itemToUpdate.Description = updatedItem.Description;
      itemToUpdate.LastModified = new Date();
    }

    this.writeLocalStorage(this.Recipes);
  }

  private readLocalStorage(): Recipe[] {
    let savedItems = localStorage.getItem('recipes');
    if (savedItems != null) {
      return JSON.parse(savedItems);
    }
    else {
      return [];
    }
  }

  private writeLocalStorage(items: Recipe[]): void {
    localStorage.setItem('recipes', JSON.stringify(items));
  }

  private generateId(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}
