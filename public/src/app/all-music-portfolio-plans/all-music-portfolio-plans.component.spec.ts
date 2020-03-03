import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMusicPortfolioPlansComponent } from './all-music-portfolio-plans.component';

describe('AllMusicPortfolioPlansComponent', () => {
  let component: AllMusicPortfolioPlansComponent;
  let fixture: ComponentFixture<AllMusicPortfolioPlansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllMusicPortfolioPlansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllMusicPortfolioPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
