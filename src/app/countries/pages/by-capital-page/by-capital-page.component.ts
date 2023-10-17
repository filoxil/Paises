import { Component, Output, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent implements OnInit {
  public initialValue:string = '';
  public countries: Country[] = [];
  public isLoading:boolean = false;
  constructor(private countriesService:CountriesService){}


  searchByCapital(term:string):void{
    this.isLoading=true;
    this.countriesService.searchCapital(term)
    .subscribe(countries =>{
      this.countries=countries;
      this.isLoading=false;
    });
  }

  ngOnInit(): void {
    this.countries= this.countriesService.cacheStore.byCapital.countries;
    this.initialValue=this.countriesService.cacheStore.byCapital.term;
  }
}


