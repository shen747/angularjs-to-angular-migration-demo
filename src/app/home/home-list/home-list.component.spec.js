describe('home list component', function () {

    let element;
    let scope;
    beforeEach(inject(function($rootScope, $compile){
      scope = $rootScope.$new();
      element = angular.element(`<cc-home-list></cc-home-list>`);
      element = $compile(element)(scope);
      scope.$apply();
    }));
   
    it('This is a sample Angular1 Test for ccHomeList component', function() {
       expect(element != null).toBeTruthy();

    });
  
   
  
  });