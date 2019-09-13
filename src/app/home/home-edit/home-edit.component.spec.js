describe('home edit component', function () {

    let element;
    let scope;
    beforeEach(inject(function($rootScope, $compile){
      scope = $rootScope.$new();
      element = angular.element(`<cc-home-edit></cc-home-edit>`);
      element = $compile(element)(scope);
      scope.$apply();
    }));
   
    it('This is a sample Angular1 Test for ccHomeEdit component', function() {
       expect(element != null).toBeTruthy();

    });
  
   
  
  });
  