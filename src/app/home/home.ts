import { Component } from "@angular/core";


//conversion ready angularjs component
@Component({
    selector: 'cc-home',
    templateUrl: './home.html'
})
export class Home {

    constructor() {
        console.log('----------- ccHome -----------');
    }

    ngOnInit() {

    }

    navigateToHome() {

    }

    navigateToAdmin() {

    }

}


// angular.module('home.app.home',[
//     'home.app.home.list',
//     'home.app.admin',
//     'ui.router'
// ])



// //conversion ready angularjs component
// .component('ccHome',{
//     bindings:{

//     },
//     templateUrl:'./home.html',
//     controller: class Home{

//         constructor(){
//             console.log('----------- ccHome -----------');
//         }

//         $onInit(){

//         }

//         navigateToHome(){

//         }

//         navigateToAdmin(){

//         }

//     }
// })
