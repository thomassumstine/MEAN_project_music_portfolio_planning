import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMusicPortfolioPlanComponent } from './new-music-portfolio-plan.component';

describe('NewMusicPortfolioPlanComponent', () => {
  let component: NewMusicPortfolioPlanComponent;
  let fixture: ComponentFixture<NewMusicPortfolioPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMusicPortfolioPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMusicPortfolioPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
