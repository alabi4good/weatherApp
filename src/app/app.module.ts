import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { DataService } from './services/data.service';
import { ToFarenheitPipe } from './pipes/to-farenheit.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    ToFarenheitPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCvKksKt7Co6Yv-FAFm8_RmDlxmMzjfjDM' // google map API
    })
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
