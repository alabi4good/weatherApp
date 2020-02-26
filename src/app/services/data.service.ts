import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = 'https://api.openweathermap.org/data/2.5/weather';
  apiKey = '86bb2a20a4bea9522bcc7feab02a02cb';


  constructor(private http: HttpClient) { }
  


  getWeatherDataByCoords(lat, lon) {
    let params = new HttpParams()
    .set('lat', lat)
    .set('lon', lon)
    .set('units', 'imperial')
    .set('appid', this.apiKey)

    return this.http.get(this.url, { params });
  }

  

  getWeatherDataByCityName(city: string) {
    let params = new HttpParams()
    .set('q', city)
    .set('units', 'imperial')
    .set('appid', this.apiKey);
    return this.http.get(this.url, { params });
  }
  
  
}
