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
    let lat = 000000;
    let lon = 00000;
    let apiId = 'xxxxxxxxxx';
    let queryString = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly,alerts&appid=${apiId}`;

    return this.http.get(queryString);

  }

}
