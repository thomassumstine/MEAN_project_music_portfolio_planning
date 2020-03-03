import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-music-portfolio-plan',
  templateUrl: './edit-music-portfolio-plan.component.html',
  styleUrls: ['./edit-music-portfolio-plan.component.css']
})
export class EditMusicPortfolioPlanComponent implements OnInit {

  music_portfolio_planToEdit = null;
  errorMsg: string = '';

  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _activeRoute: ActivatedRoute,
  ) { }

  ngOnInit() {

    this._activeRoute.params
      .subscribe((params: Params) => {

        this._httpService.getMusic_Portfolio_Plan(params.id)
          .subscribe((data: any) => {

            this.music_portfolio_planToEdit = data.music_portfolio_plan;
          });
      });
  }

  handleSubmit() {
    this._httpService.updateMusic_Portfolio_Plan(this.music_portfolio_planToEdit._id, this.music_portfolio_planToEdit)
      .subscribe((data: any) => {

        if (data.hasOwnProperty('errors')) {
          console.log(data.errors);

          this.errorMsg = data.errors.message;
        }
        else {
          this._router.navigate(['/']);
        }
      });
  }

  handleCancel() {
    this._router.navigate(['/']);
  }

}