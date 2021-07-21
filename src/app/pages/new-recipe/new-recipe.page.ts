import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.page.html',
  styleUrls: ['./new-recipe.page.scss']
})
export class NewRecipePage implements OnInit {

  public recipe: Recipe = {
    Title: "", Description: "", PrepTime: "", Serves: "1", Steps: [{
      Index: 0,
      Content: "blah"
    },
      {
      Index: 1,
      Content: "wangers"
      }   , 
  ]
  };

  public displayedColumns: string[] = ["Content", "Edit"];

  constructor() { }

  ngOnInit(): void {
  }

}
