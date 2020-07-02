import { Component, OnInit } from '@angular/core';

import { DataServiceService } from '../../service/data-service.service'

import { Global } from '../../service/models/global';
import { Countries } from 'src/app/service/models/country';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

newConfirmed: any = '';
totalConfirmed: any = '';
newDeaths: any = '';
totalDeaths: any ='';
newRecovered : any ='';
totalRecovered : any ='';
date: Date ;

country : Countries;
countryCode: any = '';
conNewConfirmed: any = '';
conTotalConfirmed: any = '';
conNewDeaths: any = '';
conTotalDeaths: any ='';
conNewRecovered : any ='';
conTotalRecovered : any ='';

constructor(private dataService :DataServiceService){

}

ngOnInit(){
this.dataService.getGlobalData().subscribe(Response => {
  console.log(Response.Global.NewConfirmed);
  this.newConfirmed = Response.Global.NewConfirmed;
  this.totalConfirmed = Response.Global.TotalConfirmed;
  this.newDeaths = Response.Global.NewDeaths;
  this.totalDeaths = Response.Global.TotalDeaths;
  this.newRecovered = Response.Global.NewRecovered;
  this.totalRecovered = Response.Global.TotalRecovered;
  this.date = Response.Date;
  this.country = Response.Countries[76];
  this.countryCode = this.country.CountryCode;
  this.conNewConfirmed = this.country.NewConfirmed;
  this.conTotalConfirmed = this.country.TotalConfirmed;
  this.conNewDeaths = this.country.NewDeaths;
  this.conTotalDeaths = this.country.TotalDeaths;
  this.conNewRecovered = this.country.NewRecovered;
  this.conTotalRecovered = this.country.TotalRecovered;
  console.log(this.country)
})
// this.dataService.getByCountry().subscribe(Response => {
//   console.log(Response)

// })
}

}
