import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-recipe-step',
  templateUrl: './recipe-step.dialog.html',
  styleUrls: ['./recipe-step.dialog.scss']
})
export class RecipeStepDialog implements OnInit {

  public stepContent: string = "";
  private sourceStep: Step;

  constructor(@Inject(MAT_DIALOG_DATA) private step: Step) { 
    this.stepContent = step.Content;
    this.sourceStep = step;
  }

  ngOnInit(): void {
  }

  public handleSaveClick(): void {
    this.sourceStep.Content = this.stepContent;
  }

}
