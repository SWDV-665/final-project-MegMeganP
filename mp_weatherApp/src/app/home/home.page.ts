import { Component } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private res;

  constructor(
              private weatherAPI: WeatherService, private alertController: AlertController
  ) {}

  ngOnInit() {
    this.getWeatherData();
  }

  getWeatherData() {
    this.weatherAPI.getWeatherData().subscribe((response) => {
      this.res = response; //set response value
      console.log(this.res);
    });
  }
  //pull to refresh event-get weather data
  doRefresh(event) {
    console.log('Refreshing...');
    this.weatherAPI.getWeatherData().subscribe((response) => {
      this.res = response;
      console.log(this.res);  //override response value already sitting on page
      console.log('Weather Data Refreshed');
      event.target.complete();  //stop ion refresher animation
    });
  }

  //alert with about info
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'MP Weather App',
      subHeader: 'Megan Perry',
      message: 'MU-SWDV665 Fall 2022 Contact: mperry8@live.maryville.edu',
      buttons: ['Return to Weather'],
    });

    await alert.present();
  }

}
