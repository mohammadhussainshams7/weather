import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = '857c84de9a2b9a3ba5559dbe7157835b';
  private apiUrl = 'http://api.openweathermap.org/data/2.5/forecast';


  private http = inject(HttpClient); // ✅ Correct way to inject
  constructor() {
    
  }
  /* 
  http://api.openweathermap.org/data/2.5/forecast?q=cairo,egypt&appid=857c84de9a2b9a3ba5559dbe7157835b&units=metric
  */
  getWeather(city: string, country: string) {
    return this.http.get(`${this.apiUrl}?q=${city},${country}&appid=${this.apiKey}&units=metric`);
  }

}
