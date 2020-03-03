import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-music-portfolio-plans',
  templateUrl: './all-music-portfolio-plans.component.html',
  styleUrls: ['./all-music-portfolio-plans.component.css']
})
export class AllMusicPortfolioPlansComponent implements OnInit {

  music_portfolio_plans: any[] = [];

  constructor(
    private _httpService: HttpService,
    private _router: Router,
  ) { }

  ngOnInit() {
    this._httpService.getMusic_Portfolio_Plans()
      .subscribe((data: any) => {
        this.music_portfolio_plans = data.music_portfolio_plans;
      });
  }

  editMusic_Portfolio_Plan(music_portfolio_planId: string) {
    this._router.navigate(['/edit/', music_portfolio_planId]);
  }

  deleteMusic_Portfolio_Plan(music_portfolio_planId: string) {
    this._httpService.deleteMusic_Portfolio_Plan(music_portfolio_planId)
      .subscribe((data: any) => {

        for (let i = 0; i < this.music_portfolio_plans.length; i++) {
          if (this.music_portfolio_plans[i]._id === music_portfolio_planId) {
            return this.music_portfolio_plans.splice(i, 1);
          }
        }
      });
  }
}