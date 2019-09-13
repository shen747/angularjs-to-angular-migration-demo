import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IHome } from "./IHome";


@Injectable()
export class HomeService {

   
    API_BASE: string;

    constructor(
        private httpClient:HttpClient
    ) {
        this.API_BASE = 'http://localhost:9000/api';
    }

    getHomes() {
        return this.httpClient.get<IHome[]>(`${this.API_BASE}/homes`).toPromise();
    }

    getHome(id: number) {
        return this.httpClient.get<IHome>(`${this.API_BASE}/homes/${id}`).toPromise();;
    }

    updateHome(home: IHome) {
        return this.httpClient.put<IHome>(`${this.API_BASE}/homes/${home.homeid}`, home).toPromise();;
    }

    addHome(home: IHome) {
        return this.httpClient.post(`${this.API_BASE}/homes`, home).toPromise();;
    }

    deleteHome(id: number) {
        return this.httpClient.delete(`${this.API_BASE}/homes/${id}`).toPromise();;
    }
}


// angular.module('home.app.home.service', [])

//     .service('homeService', class HomeService {

//         _$http: any;
//         API_BASE: string;

//         constructor($http) {
//             this._$http = $http;
//             this.API_BASE = 'http://localhost:9000/api';
//         }

//         getHomes() {
//             return this._$http.get(`${this.API_BASE}/homes`);
//         }

//         getHome(id: number) {
//             return this._$http.get(`${this.API_BASE}/homes/${id}`).then((res) => {
//                 let home = res.data;
//                 return home;
//             });
//         }

//         updateHome(home:any){            
//             return this._$http.put(`${this.API_BASE}/homes/${home.homeid}`,home).then((res)=>{
//                 let home = res.data;
//                 return home;
//             });
//         }

//         addHome(home:any){            
//             return this._$http.post(`${this.API_BASE}/homes`,home).then((res)=>{
//                 let home = res.data;
//                 return home;
//             });
//         }

//         deleteHome(id:number){
//             return this._$http.delete(`${this.API_BASE}/homes/${id}`);
//         }

//     });