import { HomeService } from './home.service';
import { HttpClient } from '@angular/common/http';

describe('Home Service', function () {
  let homeService;
  let httpClient:HttpClient;

  beforeEach(() => {
    homeService = new HomeService(httpClient);
  })

  it('This is a sample test to test the Home Serivce', () => {
  
  })
  
})

// describe('Home Service', function() {
    
//     let homeService;

//     beforeEach(inject(function() {
//       var $injector = angular.injector(['home.app.home.service']);
//       homeService = $injector.get('homeService');
//     }));

//     it('This is a sample test to test the Home Serivce ', function(){    
//     });
     
// });