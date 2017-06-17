import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { SidebarComponent } from './structure/sidebar/sidebar.component';
import { RegisterComponent } from './forms/register/register.component';
import { LoginComponent } from './forms/login/login.component';
import { TabsComponent } from './layout/tabs/tabs.component';
import { TabComponent } from './layout/tabs/tab/tab.component';
import { CardComponent } from './structure/card/card.component';
import { PopupComponent } from './layout/popup/popup.component';

const ROUTES = [
  {
    path: '',
    component: LandingComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SidebarComponent,
    RegisterComponent,
    LoginComponent,
    TabsComponent,
    TabComponent,
    TabComponent,
    PopupComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
