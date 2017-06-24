var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { Angular2SocialLoginModule } from "angular2-social-login";
import { MasonryModule } from 'angular2-masonry';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule, MdMenuModule } from '@angular/material';
import 'hammerjs';
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
var ROUTES = [
    {
        path: '',
        component: LandingComponent
    },
    {
        path: 'discover',
        component: DiscoverComponent
    }
];
var providers = {
    "facebook": {
        "clientId": "1363303997093150",
        "apiVersion": "v2.3"
    }
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
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
            BrowserAnimationsModule,
            MdButtonModule,
            MdCheckboxModule,
            MdMenuModule,
            RouterModule.forRoot(ROUTES)
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
Angular2SocialLoginModule.loadProvidersScripts(providers);
//# sourceMappingURL=../../../../src/app/app.module.js.map