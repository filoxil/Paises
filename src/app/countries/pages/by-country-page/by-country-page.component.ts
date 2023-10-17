import { Component, Output, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent implements OnInit {
  public initialValue:string='';
  public isLoading:boolean = false;
  public countries: Country[] = []
  constructor(private countriesService:CountriesService){}



  searchByCountry(term:string):void{
    this.isLoading=true;
    this.countriesService.searchCountry(term)
    .subscribe(countries =>{
      this.isLoading=false;
      this.countries=countries;
    });
  }
  ngOnInit(): void {
    this.countries= this.countriesService.cacheStore.byCountry.countries;
    this.initialValue=this.countriesService.cacheStore.byCountry.term;
  }
}
