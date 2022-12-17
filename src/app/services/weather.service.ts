import { WeatherData } from './../models/weather.model';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }
  getWeatherData(cityName:string):Observable<WeatherData>{
   return this.http.get<WeatherData>(`${environment.apiUrl}/weather?q=${cityName}&appid=${environment.apiKey}`)
  }
}
