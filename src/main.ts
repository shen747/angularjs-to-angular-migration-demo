/*
  Bootstrapping the AngularJS app from within the Angular
*/

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UpgradeModule } from '@angular/upgrade/static';
import 'reflect-metadata';

import { AppModule } from './app/app.module';
import { downgradeItems } from './downgrades';

platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {

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
