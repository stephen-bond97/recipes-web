import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeStepDialog } from './recipe-step.dialog';

describe('RecipeStepDialog', () => {
  let component: RecipeStepDialog;
  let fixture: ComponentFixture<RecipeStepDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeStepDialog ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeStepDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
