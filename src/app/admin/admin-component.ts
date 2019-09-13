angular.module('home.app.admin',[
    'ui.router'
])

.config(($stateProvider) => {
    console.log('--- Home Admin Component Route Config ---');
    $stateProvider.state('admin', {
        url: '/admin',
        component: 'ccAdmin'
    });
})

//conversion ready angularjs component
.component('ccAdmin',{
    bindings:{

    },
    templateUrl:'./admin-component.html',
    controller: class Home{

        constructor(){

        }

        $onInit(){

        }

        navigateToHome(){
            
        }

        navigateToAdmin(){

        }

    }
})
