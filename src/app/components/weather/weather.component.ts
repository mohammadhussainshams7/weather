import { Component } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { FormsModule } from '@angular/forms';
import { DatePipe, NgFor, NgIf } from '@angular/common';
 
@Component({
  selector: 'app-weather',
  imports: [FormsModule, NgFor , NgIf,DatePipe ],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent {
  city = '';
  country = '';
  weatherData!:any;
  savedCity: string | null = '';
  savedCountry: string | null = '';
  tempArray :any  ;


  constructor( private weatherService: WeatherService) {}

  ngOnInit() {

    // Load saved city/country from local storage
    this.savedCity = localStorage.getItem('city');
    this.savedCountry = localStorage.getItem('country');
    if (this.savedCity && this.savedCountry) {
      this.fetchWeather(this.savedCity, this.savedCountry);
    }
  }

  objectEntries(obj: object) {
    return Object.entries(obj);
  }

  fetchWeather(city: string, country: string) {
    this.weatherService.getWeather(city, country).subscribe(
      (data)=>{
        this.weatherData = data
        localStorage.setItem('city', city);
        localStorage.setItem('country', country);
        this.tempArray = Object.values(this.weatherData.list);
        this.tempArray = this.tempArray.slice(0,5);
      }
 
  
    );
  }

  onSearch() {
    if (this.city && this.country) {
      this.fetchWeather(this.city, this.country);
    } 
  }



}
  
  

