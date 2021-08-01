import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RecipeStepDialog } from 'src/app/components/recipe-step/recipe-step.dialog';

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
    },
    ]
  };

  public displayedColumns: string[] = ["Content", "Edit"];

  public constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  public handleAddStepClick(): void {
    this.recipe.Steps.push({
      Index: this.recipe.Steps.length,
      Content: ""        
    });

    let step = this.recipe.Steps.last() as Step;

    let dialogRef = this.dialog.open(RecipeStepDialog, {data: step});
    dialogRef.afterClosed().subscribe(() => this.handleDialogClosed());
  }

  public handleEditStepClick(step: Step): void {
    let dialogRef = this.dialog.open(RecipeStepDialog, {data: step});
    dialogRef.afterClosed().subscribe(() => this.handleDialogClosed());
  }

  private handleDialogClosed(): void {
    console.log("dialog closed");
    this.recipe.Steps = this.recipe.Steps;
  }

}
