import { Input, Component, Inject } from "@angular/core";
import { IHome } from "../IHome";
import { HomeService } from "../home.service";



@Component({
    selector: 'cc-home-table',
    templateUrl: './home-table.component.html',
})

export class HomeTableComponent {

    @Input() homes: IHome[];
    
    constructor(
        private homeService:HomeService, 
        @Inject('$state') private $state
    ) {
       
    }

    editHome(id:number){
        console.log(`edting home id ${id} !`);
        this.$state.go('edit',{ 'homeId' : id });
    }


    deleteClicked(id: number) {
        this.homeService.deleteHome(id).then(() => {
            console.log(`home id ${id} deleted !`);
            this.$state.reload('homeList', { reload: true });
        }, (err) => {
            console.error('error deleting the home -> ', err);
        });
    }
}


// angular.module('home.app.home.table',[
//     'home.app.home.edit'
// ])


// //conversion ready angularjs component
// .component('ccHomeTable',{
//     bindings:{
//         homes:'<'
//     },
//     templateUrl:'./home-table.component.html',
//     controller: class Home{

//         _homeService:any;
//         _$state:any;

//         constructor(homeService,$state){
//             this._homeService = homeService;
//             this._$state = $state;
//         }

//         deleteClicked(id:number){
//             this._homeService.deleteHome(id).then(()=>{
//                 console.log(`home id ${id} deleted !`);
//                 this._$state.reload('homeList',{reload: true});
//             },(err)=>{
//                 console.error('error deleting the home -> ',err);
//             });
//         }
//     }
// })
