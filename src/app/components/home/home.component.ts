import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { DataServiceService } from '../../service/data-service.service'

import { Global } from '../../service/models/global';
import { Countries } from 'src/app/service/models/country';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

newConfirmed: any = '';
totalConfirmed: number;
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


data = [];
isLoaded = false;
constructor(private dataService :DataServiceService,
  private changeDetectorRefs: ChangeDetectorRef){

}

myType = 'PieChart';
myData = [];
myControl = new FormControl();
options: string[] = ['One', 'Two', 'Three'];
filteredOptions: Observable<string[]>;
Response1 : Countries;

currentCountry;
ngOnInit(){


  this.dataService.getGlobalData().subscribe(Response => {



  // this.myData.push(["Total Confirmed", Response.Global.TotalConfirmed])
  // this.myData.push(["Total Death", Response.Global.TotalDeaths])

  this.newConfirmed = Response.Global.NewConfirmed;
  this.totalConfirmed = Response.Global.TotalConfirmed;
  this.newDeaths = Response.Global.NewDeaths;
  this.totalDeaths = Response.Global.TotalDeaths;
  this.newRecovered = Response.Global.NewRecovered;
  this.totalRecovered = Response.Global.TotalRecovered;
  this.date = Response.Date;
  this.Response1 = Response.Countries;
  this.country = Response.Countries[0];
  this.currentCountry =  Response.Countries[0].Country;
  this.countryCode = this.country.CountryCode;
  this.conNewConfirmed = this.country.NewConfirmed;
  this.conTotalConfirmed = this.country.TotalConfirmed;
  this.conNewDeaths = this.country.NewDeaths;
  this.conTotalDeaths = this.country.TotalDeaths;
  this.conNewRecovered = this.country.NewRecovered;
  this.conTotalRecovered = this.country.TotalRecovered;

  this.isLoaded = true;
  });

}

onCountryChange(event){
 console.log(this.currentCountry)

 for (let i in this.Response1){

  if(this.Response1[i].Country === this.currentCountry){
    this.country = this.Response1[i];
    this.currentCountry =  this.Response1[i].Country;
    this.countryCode = this.country.CountryCode;
    this.conNewConfirmed = this.country.NewConfirmed;
    this.conTotalConfirmed = this.country.TotalConfirmed;
    this.conNewDeaths = this.country.NewDeaths;
    this.conTotalDeaths = this.country.TotalDeaths;
    this.conNewRecovered = this.country.NewRecovered;
    this.conTotalRecovered = this.country.TotalRecovered;
   console.log(this.Response1[i])
  }


 }
}
}
