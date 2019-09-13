import { downgradeComponent, downgradeInjectable } from '@angular/upgrade/static';
import { HomeService } from './app/home/home.service';
import { HomeTableComponent } from './app/home/home-table/home-table.component';
import { HomeEditComponent } from './app/home/home-edit/home-edit.component';


declare var angular: angular.IAngularStatic;

    //Angular -> AngularJS downgrades declarations
    export function downgradeItems(){
        angular.module('home.app')        
        .factory('homeService', downgradeInjectable(HomeService))
        .directive('ccHomeTable', downgradeComponent({ component: HomeTableComponent }))
        .directive('ccHomeEdit', downgradeComponent({ component: HomeEditComponent }))
    }
    