const startingRoute = '/homes-list';
const app = angular.module('home.app',
    [
        'ui.router',
        'ngAnimate',
        'ngSanitize',
        'ngCookies',
        'ui.bootstrap.tpls',
        'home.app.home.list',
        'home.app.admin',
        // 'home.app.home' --> Upgraded to Angular
    ]);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    console.log('---- Angular1 App config[1] ----');


    $stateProvider
        .state(startingRoute, {
            url: startingRoute,
            component: 'homeList'
        })
        .state('edit', {
            url: '/edit/:homeId',
            component: 'ccHomeEdit',
        })
        .state('add', {
            url: '/add',
            component: 'ccHomeEdit'
        });

    $urlRouterProvider.otherwise(function () {
        return startingRoute;
    });



}]);

