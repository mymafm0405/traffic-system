import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LightComponent } from './components/light/light.component';
import { DirectionComponent } from './components/direction/direction.component';
import { IntersectionComponent } from './components/intersection/intersection.component';

@NgModule({
  declarations: [
    AppComponent,
    LightComponent,
    DirectionComponent,
    IntersectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
