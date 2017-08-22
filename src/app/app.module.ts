import { HeaderComponent } from './shared/header.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { FirefightersComponent } from './firefighters/firefighters.component';
import { FirefighterComponent } from './firefighters/firefighter/firefighter.component';
import { FirefightersService } from './firefighters/firefighters.service';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FirefightersComponent,
    FirefighterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    FirefightersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
