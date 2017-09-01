import { HeaderComponent } from './shared/header.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { FirefightersComponent } from './firefighters/firefighters.component';
import { FirefightersService } from './firefighters/firefighters.service';
import { HomeComponent } from './home/home.component';
import { FirefighterListComponent } from './firefighters/firefighter-list/firefighter-list.component';
import { FirefighterEditComponent } from './firefighters/firefighter-edit/firefighter-edit.component';
import { FirefighterDetailComponent } from './firefighters/firefighter-detail/firefighter-detail.component';
import { FirefighterStartComponent } from './firefighters/firefighter-start/firefighter-start.component';
import { FirefighterItemComponent } from './firefighters/firefighter-list/firefighter-item/firefighter-item.component';
import { QualificationsComponent } from './qualifications/qualifications.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FirefightersComponent,
    HomeComponent,
    FirefighterListComponent,
    FirefighterEditComponent,
    FirefighterDetailComponent,
    FirefighterStartComponent,
    FirefighterItemComponent,
    QualificationsComponent
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
