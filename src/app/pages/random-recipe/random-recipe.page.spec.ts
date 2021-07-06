import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomRecipePage } from './random-recipe.page';

describe('RandomRecipePage', () => {
  let component: RandomRecipePage;
  let fixture: ComponentFixture<RandomRecipePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomRecipePage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomRecipePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
