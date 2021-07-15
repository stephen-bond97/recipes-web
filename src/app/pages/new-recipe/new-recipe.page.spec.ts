import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRecipePage } from './new-recipe.page';

describe('NewRecipePage', () => {
  let component: NewRecipePage;
  let fixture: ComponentFixture<NewRecipePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewRecipePage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRecipePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
