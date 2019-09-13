/*
  Bootstrapping the AngularJS app from within the Angular
*/

import { platformBrowser } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import 'reflect-metadata';

import {  AppModuleNgFactory } from './app/app.module.ngfactory';
// import {  AppModuleNgFactory } from '../prod/app/app.module.ngfactory';

import { enableProdMode } from '@angular/core';
import { downgradeItems } from './downgrades';


enableProdMode();//make the change detection cycle to only run once
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory).then(platformRef => {

    //Angular -> AngularJS downgrades
    downgradeItems();

    console.log('---- Bootstrapping Angular1 App from within Angular ----');
    const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
    upgrade.bootstrap(document.documentElement, ['home.app']);
    console.log('---- Bootstrapped the Hybrid Application ----');
});


/* 
    Manually Bootstrapping the AngularJS app. This must be done instead
    of bootstrapping using the ng-app in-order to start the migration
 */
// angular.element(document).ready(() => {
//   angular.bootstrap(document.body, ['home.app']);
//   console.log('---- Angular1 App Bootstrapped from Angular1 ----');
// });
