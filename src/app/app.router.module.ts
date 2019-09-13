import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { HomeEditComponent } from './home/home-edit/home-edit.component';



const routes: Routes = [
  { path: 'edit/:homeId', component: HomeEditComponent },
  { path: 'add', component: HomeEditComponent }
];

const config : ExtraOptions = {
     useHash : false
};

@NgModule({
  imports: [RouterModule.forRoot(routes,config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
