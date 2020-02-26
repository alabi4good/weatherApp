import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
lat;
lon;
weather;
locationDenied:boolean = true;
locationDeniedEnableCity: boolean = false;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getLocation();
   //this.dataService.getWeatherDataByCoords(35, 139).subscribe(data=>console.log(data))
   
  }

  getLocation() {
    //Using HTML5 geolocation to get the lat and lon of the user's location
    if("geolocation" in navigator) {
      navigator.geolocation.watchPosition(success=> {
        this.lat = success.coords.latitude;
        this.lon = success.coords.longitude;

        this.dataService.getWeatherDataByCoords(this.lat, this.lon)
        .subscribe(data=> {
          this.weather =data;
          //console.log(this.weather)
         
        });
      }, (error)=> {
        if(error.code == error.PERMISSION_DENIED){
          this.locationDenied = false;
          this.locationDeniedEnableCity = true;
        }
      })
    }
  }
  

  getCity(city){
    if(city.value){
      try{
        this.dataService.getWeatherDataByCityName(city.value).subscribe((data: any)=>{
          this.weather = data;
          this.lat = data.coord.lat;
          this.lon = data.coord.lon
          city.value = '';
        })
      }catch(err){
        alert(err)
      }
      
    }
  
  }

  getMapCity(event){
    this.lat = event.coords.lat;
    this.lon = event.coords.lng;
    this.dataService.getWeatherDataByCoords(this.lat, this.lon)
    .subscribe(data=> {
      this.weather =data;
    });  
  }  

    
}
