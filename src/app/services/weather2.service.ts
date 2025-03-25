import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Weather2Service {
  private apiKey = '857c84de9a2b9a3ba5559dbe7157835b';
  private apiUrl = 'http://api.openweathermap.org/data/2.5/forecast';
  apiserv =  inject(HttpClient)
}
