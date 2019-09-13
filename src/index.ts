
/* 
    All the AngularJS Compoents and Styles Should be Imported Here for the Webpack build
    use the command:

    use the command `dir /a /s /b > list.txt` from the src dir to list all the files to be 
    imported for the application
*/

//Include all the style libs
import './app/less/main.less';

//services
// import './app/home/home.service'; //Converted to Angular

//home-list component
import './app/home/home-list/home-list.component.less';
import './app/home/home-list/home-list.component';


//table component
import './app/home/home-table/home-table.component.less';
import './app/home/home-table/home-table.component';

//list component
import './app/home/home-list/home-list.component.less';
import './app/home/home-list/home-list.component';

//edit component
import './app/home/home-edit/home-edit.component.less';
import './app/home/home-edit/home-edit.component';

//admin component
import './app/admin/admin-component.less';
import './app/admin/admin-component';

//home module
import './app/home/home';
import './app/app';
