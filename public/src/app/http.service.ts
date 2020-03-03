import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private _http: HttpClient
  ) { }


  getMusic_Portfolio_Plans() {
    // longform
    const observable = this._http.get('/api/music_portfolio_plans');
    return observable;
  }

  getMusic_Portfolio_Plan(id) {
    return this._http.get('/api/music_portfolio_plans/' + id);
  }

  createMusic_Portfolio_Plan(newMusic_Portfolio_Plan) {
    return this._http.post('/api/music_portfolio_plans', newMusic_Portfolio_Plan);
  }

  updateMusic_Portfolio_Plan(id, editedMusic_Portfolio_Plan) {
    return this._http.put('/api/music_portfolio_plans/' + id, editedMusic_Portfolio_Plan);
  }

  deleteMusic_Portfolio_Plan(id) {
    return this._http.delete('/api/music_portfolio_plans/' + id);
  }
}