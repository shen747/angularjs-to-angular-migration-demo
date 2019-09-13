angular.module('home.app.home.list',[
    // 'home.app.home.table', --> upgraded to Angular
    // 'home.app.home.service' --> upgraded to Angular
])

.config(($stateProvider) => {
    console.log('--- Home List Component Route Config ---');
    $stateProvider.state('homeList', {
        url: '/homes-list',
        component: 'ccHomeList'
    });
})


//conversion ready angularjs component
.component('ccHomeList',{
    bindings:{

    },
    templateUrl:'./home-list.component.html',
    controller: class Home{

        homes:any;
        homeService:any;

        constructor(homeService){
            this.homeService = homeService;
        }

        $onInit(){
            this.homeService.getHomes().then((res)=>{ 
                this.homes = _.get(res,'data');
            });
        }

        navigateToHome(){

        }

        navigateToAdmin(){

        }

    }
});