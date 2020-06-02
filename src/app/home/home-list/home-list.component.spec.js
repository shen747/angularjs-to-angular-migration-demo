

describe('home list component', function () {

  beforeEach(module('ui.router'));
  beforeEach(module('home.app.home.list'));

  var $componentController;
  beforeEach(inject(function (_$componentController_) {
    $componentController = _$componentController_;
  }));

  var $injections;

  beforeEach(inject(function () {
    $injections = {    
      homeService: { getHomes : function(){}}
    };
  }));
 

  it('This is a sample Angular1 Test for ccHomeList component', function () {

    //Arrange
    var bindings = {};
    var ccHomeListCtrl = $componentController('ccHomeList', $injections, bindings);  
    spyOn(ccHomeListCtrl.homeService, 'getHomes').and.returnValue(Promise.resolve({}));

    //Act
    ccHomeListCtrl.$onInit();

    //Asset  
    expect(ccHomeListCtrl.homeService.getHomes).toHaveBeenCalled();

  });



});