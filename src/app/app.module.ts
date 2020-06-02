import { NgModule, Component } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UrlHandlingStrategy, UrlTree } from '@angular/router';


import { AppComponent } from './app.component';
import { Home } from './home/home';
import { HomeService } from './home/home.service';
import { HomeTableComponent } from './home/home-table/home-table.component';
import { AppRoutingModule } from './app.router.module';
import { HomeEditComponent } from './home/home-edit/home-edit.component';



export function getLocation(i: any) { return i.get('$location') }
export function getTranslate(i: any) { return i.get('$translate') }
export function getState(i: any) { return i.get('$state') }
export function getStateParams(i: any) { return i.get('$stateParams') }

class Ng1Ng2UrlHandlingStrategy implements UrlHandlingStrategy {
    shouldProcessUrl(url: UrlTree): boolean {
        let urlToProcess = url.toString();       
        let isProcessingUrl = urlToProcess.includes('add');    
        return isProcessingUrl;
    }
    extract(url: UrlTree): UrlTree { return url; }
    merge(newUrlPart: UrlTree, rawUrl: UrlTree): UrlTree { return newUrlPart; }
}


@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        UpgradeModule,
        HttpClientModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HomeTableComponent,
        HomeEditComponent,
        Home
    ],
    providers: [
        HomeService,
        { provide: '$location', useFactory: getLocation, deps: ['$injector'] },//upgrade angularjs 1 service to Angular without rewrite
        { provide: '$translate', useFactory: getTranslate, deps: ['$injector'] },//upgrade angularjs 1 service to Angular without rewrite
        { provide: '$state', useFactory: getState, deps: ['$injector'] },//upgrade angularjs 1 service to Angular without rewrite
        { provide: '$stateParams', useFactory: getStateParams, deps: ['$injector'] },//upgrade angularjs 1 service to Angular without rewrite
        { provide: UrlHandlingStrategy, useClass: Ng1Ng2UrlHandlingStrategy },
    ],
    bootstrap: [
        AppComponent,
    ],
    entryComponents: [
        Home,
        HomeTableComponent,
        HomeEditComponent
    ]
})
export class AppModule { }
