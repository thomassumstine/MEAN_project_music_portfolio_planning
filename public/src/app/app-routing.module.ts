import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewMusicPortfolioPlanComponent } from './new-music-portfolio-plan/new-music-portfolio-plan.component';
import { EditMusicPortfolioPlanComponent } from './edit-music-portfolio-plan/edit-music-portfolio-plan.component';
import { AllMusicPortfolioPlansComponent } from './all-music-portfolio-plans/all-music-portfolio-plans.component';


const routes: Routes = [
  {
    path: 'edit/:id',
    component: EditMusicPortfolioPlanComponent
  },
  {
    path: 'new',
    component: NewMusicPortfolioPlanComponent
  },
  {
    path: '',
    pathMatch: 'full',
    component: AllMusicPortfolioPlansComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }