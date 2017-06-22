import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { Angular2SocialLoginModule } from "angular2-social-login";
import { MasonryModule } from 'angular2-masonry';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { SidebarComponent } from './structure/sidebar/sidebar.component';
import { RegisterComponent } from './forms/register/register.component';
import { LoginComponent } from './forms/login/login.component';
import { TabsComponent } from './layout/tabs/tabs.component';
import { TabComponent } from './layout/tabs/tab/tab.component';
import { CardComponent } from './structure/card/card.component';
import { PopupComponent } from './layout/popup/popup.component';
import { DiscoverComponent } from './discover/discover.component';

const ROUTES = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'discover',
    component: DiscoverComponent
  }
];

let providers = {
    "facebook": {
      "clientId": "1363303997093150",
      "apiVersion": "v2.3" //like v2.4
    }
  };

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SidebarComponent,
    RegisterComponent,
    LoginComponent,
    TabsComponent,
    TabComponent,
    CardComponent,
    PopupComponent,
    DiscoverComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Angular2SocialLoginModule,
    MasonryModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
Angular2SocialLoginModule.loadProvidersScripts(providers);
