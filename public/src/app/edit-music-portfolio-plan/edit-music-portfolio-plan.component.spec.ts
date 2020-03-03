import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMusicPortfolioPlanComponent } from './edit-music-portfolio-plan.component';

describe('EditMusicPortfolioPlanComponent', () => {
  let component: EditMusicPortfolioPlanComponent;
  let fixture: ComponentFixture<EditMusicPortfolioPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMusicPortfolioPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMusicPortfolioPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
