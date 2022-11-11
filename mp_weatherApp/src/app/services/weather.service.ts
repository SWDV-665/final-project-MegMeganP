import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
              private http: HttpClient,
  ) { }

  getWeatherData(): Observable<any> {
    let lat = 33.3062;
    let lon = -111.8413;
    let apiId = '9993609861517d431c5805fac62093cb';
    let queryString = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly,alerts&appid=${apiId}`;

    return this.http.get(queryString);

  }

}
