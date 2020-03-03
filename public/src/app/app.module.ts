import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewMusicPortfolioPlanComponent } from './new-music-portfolio-plan/new-music-portfolio-plan.component';
import { EditMusicPortfolioPlanComponent } from './edit-music-portfolio-plan/edit-music-portfolio-plan.component';
import { AllMusicPortfolioPlansComponent } from './all-music-portfolio-plans/all-music-portfolio-plans.component';
import { HttpService } from './http.service';

@NgModule({
  declarations: [
    AppComponent,
    NewMusicPortfolioPlanComponent,
    EditMusicPortfolioPlanComponent,
    AllMusicPortfolioPlansComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
