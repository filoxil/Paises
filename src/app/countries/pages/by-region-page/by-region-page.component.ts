import { Component, Output, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';


@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ['.btn:hover{background-color:#0d6efd;color:white;}']
})
export class ByRegionPageComponent implements OnInit{
  public isLoading:boolean = false;
  public countries: Country[] = [];
  public regions:Region[]=['Africa','America', 'Asia', 'Europe', 'Oceania']
  public selectedRegion?:Region;
  constructor(private countriesService:CountriesService){}

  searchByRegion(region:Region):void{
    this.selectedRegion = region;
    this.isLoading = true;
    this.countriesService.searchRegion(region)
    .subscribe(countries =>{
      this.isLoading = false;
      this.countries=countries;
    });
  }

  ngOnInit(): void {
    this.countries= this.countriesService.cacheStore.byRegion.countries;
    this.selectedRegion = this.countriesService.cacheStore.byRegion.region;
  }
}
