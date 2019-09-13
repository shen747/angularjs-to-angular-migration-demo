# Angularjs :arrow_right: Angular migration-demo
> A sample application to show the basic steps and the process of migrating from AngularJS to Angular

***Before using this project as a guide please consider the following steps for your existing AngularJS project.
Also please note that your AngularJS project should be ordered by sections before you start with the migration
process. If you don't have this sectional structure;
    i.e: all the services,controllers,styles,tests & templates for let's say admin section in one folder.***

> You will need to structure your project in that manner to begin this process.

## First 07 Steps In Migration that are not shown in the application

1. Write/Convert the entire AngularJS Application to AngularJS 1.5+ Components & Services into ES6 classes.
    - This includes converting all the AngularJS Controllers and Component Directives 
      (i.e: Directives with a Template) into AngularJS 1.5+ Components.
    - In doing this get rid of all the places where global / $rootScope / shared scope is used.

***If your current gulp/grunt based angularjs build doesn't support es6 you might need to introduce babel-compiler in the interim to your gulp build to transpile your code to ES5 and keep your project running as usual while the migration process is going on.***

2. Get rid of the attribute / structural directives and work them into the AngularJS 1.5+ components.

3. Get rid off all the bad code practices.
    - Code where parent scope is diectly applied using scope.$parent.
    - Code that is heavily tied to and dependent on $watches and replace them with callBacks
    - Get rid of all references to $scope anywhere in the AngularJS 1.5+ components

4. Convert all the .js files to .ts files.

5. Change all the template paths in components to be relative paths. (ie: ./template.html)

6. Create an index.ts & vendors.ts files to import all the AngularJS/Angular1 files & vendor files (refer this proj config) into the webpack build.

***change directory to `src` directory & use the command `dir /a /s /b > list.txt` to list all the files to be imported for the application***

7. Introduce Webpack build to do the build instead on Gulp or Grunt.

 ### A few pointers about this demo project.
 - This project is written using AngularJS 1.7.x you will need to have an AngularJS version 1.5.x or above in your project to start the upgrading process.
 - This project uses bootstrap for styling,font-awesome for icons and the lodash library for utility functions.

 ### What is next ?.

 > Afer the above 07 Steps are completed you could refer to this project to see how to :

 1. How to bootstrap the AngularJS 1.x application inside Angular using the migration modules.
 2. Convert an AngularJS 1.5+ component to an Angular Component.
 3. Covert an AngularJS Service into an Angular Serivce (@Injectable).
 4. How to utilize angularJs based built in services like $location & user defined serivices from within Angular Code.
    _This will allow to keep interoperability between AngularJS and Angular in the Hybrid Application_
 5. How to migrate AngularJS routing to Angular routing.
 6. Convert an AngularJS test/spec into an Angular test & Get all the Jasmine based AngularJS tests running on Karma test runner.
 7. How to create an AOT build to take the hybrid application into production.

 ***Once the Hybrid application is in production you could either keep running in the Hybrid state and do all the new development in Angular or gradually phase out AngularJS completely.***


 ### How to build and run this demo project ?

 > To run project simply change directory to the project folder and then :
    
  0. Follow the instructions on the server/Readme.md to setup and run the server.
  1. run `npm -i` to install all the dependencies for the project.
  2. run `npm run serve-dev` to build and serve the project on port 8080 using webpack dev server.
  3. run `npm run build-prod` to do an production build using the aot compiler.
  4. run `npm run serve-prod` to run the production build for testing on the webpack dev server.
  5. run `npm run test` to run all the AnuglarJS tests
  6. run `npm run test2` to run all the Anuglar tests
  7. run `npm run clean-dev` or `npm run clean-prod` to clean up the environments.



  I hope this project helps with your AngularJS -> Angular migration efforts.

  For a more detailed explanation of the migration process,See [From AngularJS -> Angular Quick Guide](http://shen747.blogspot.com/)