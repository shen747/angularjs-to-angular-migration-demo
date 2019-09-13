import { Component, OnInit, Inject } from "@angular/core";
import { HomeService } from "../home.service";
import * as _ from "lodash";

@Component({
    selector: 'cc-home-edit',
    templateUrl: './home-edit.component.html'
})
export class HomeEditComponent implements OnInit {

    //private class variables
    _editedHomeId: number;
    _selectedHome: any;
    _isNew: boolean;   

    constructor(
                @Inject('$state') private $state,
                @Inject('$stateParams') private $stateParams,
                private homeService:HomeService ) {
        console.log('---- Home Edit Component ----');
        this._editedHomeId = !_.isNumber(this.$stateParams.homeId) ? this.$stateParams.homeId : null;      
        this._isNew = _.isUndefined(this._editedHomeId);
        this._selectedHome = {};    
    }


    ngOnInit(): void {  
        this.homeService.getHome(this._editedHomeId).then(res => {
            this._selectedHome = _.get(res,'data') || {};
        });
    }

    saveHome() {
        if (!_.isUndefined(this._editedHomeId) && this._editedHomeId != null) {
            this.homeService.updateHome(this._selectedHome).then(() => {
                this.$state.go('homeList');
            });
        }
        else {
            this.homeService.addHome(this._selectedHome).then(() => {
                this.$state.go('homeList');
            });
        }
    }
}


// angular.module('home.app.home.edit', [
//     'ui.router'
// ])

//     .config(($stateProvider) => {
//         console.log('--- Home Edit Component Route Config ---');
//         $stateProvider
//         .state('edit', {
//             url: '/edit/:homeId',
//             component: 'ccHomeEdit',
//         })
//         .state('add', {
//             url: '/add',
//             component: 'ccHomeEdit'
//         });
//     })

//     //conversion ready angularjs component
//     .component('ccHomeEdit', {
//         bindings: {

//         },
//         templateUrl: './home-edit.component.html',
//         controller: class Home {

//             _editedHomeId: number;
//             selectedHome: any;
//             _homeService: any;
//             _isNew: boolean;
//             _$state: any;
//             _$stateParams:any;

//             constructor($state, $stateParams, homeService) {
//                 console.log('---- Home Edit Component ----');
//                 this._editedHomeId = !_.isNumber($stateParams.homeId)? $stateParams.homeId: null;

//                 this._isNew = _.isUndefined(this._editedHomeId);
//                 this._homeService = homeService;
//                 this._$state = $state;
//                 this._$stateParams = $stateParams;
//             }



//             $onInit() {
//                 this._homeService.getHome(this._editedHomeId).then(res => {
//                     this.selectedHome = res.data;
//                 });

//             }

//             saveHome() {

//                 if (!_.isUndefined(this._editedHomeId) && this._editedHomeId != null) {
//                     this._homeService.updateHome(this.selectedHome).then((res) => {
//                         this._$state.go('homeList');
//                     });
//                 }
//                 else {
//                     this._homeService.addHome(this.selectedHome).then((res) => {
//                         this._$state.go('homeList');
//                     });
//                 }
//             }

//         }
//     })
