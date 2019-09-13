import { TestBed } from '@angular/core/testing';
import { ComponentFixture } from "@angular/core/testing";
import { async } from "@angular/core/testing";
import { HomeTableComponent } from './home-table.component';
import { HomeService } from '../home.service';

describe('ccHomeTable', function() {
  let fixture: ComponentFixture<HomeTableComponent>;
  let component: HomeTableComponent;
  let element;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeTableComponent
      ],
      providers:[
        { provide : HomeService,useValue: new HomeService(null)},
        { provide : '$state', useFactory: null }
      ]
    }).compileComponents()

    fixture = TestBed.createComponent(HomeTableComponent);   
    component = fixture.componentInstance;
    element = fixture.nativeElement;
  })

  it('This is a sample Angular1 Test for ccHomeTable component', async(() => {
    expect(component != null).toBeTruthy();
  }));
});

// describe('home table component', function () {

//     let element;
//     let scope;
//     beforeEach(inject(function($rootScope, $compile){
//       scope = $rootScope.$new();
//       element = angular.element(`<cc-home-table></cc-home-table>`);
//       element = $compile(element)(scope);
//       scope.$apply();
//     }));
   
//     it('This is a sample Angular1 Test for ccHomeTable component', function() {
//        expect(element != null).toBeTruthy();

//     });
  
   
  
//   });  