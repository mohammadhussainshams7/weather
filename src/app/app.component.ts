import { Component } from '@angular/core';
import { WeatherComponent } from "./components/weather/weather.component";

@Component({
  selector: 'app-root',
  imports: [WeatherComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'wether';
}
