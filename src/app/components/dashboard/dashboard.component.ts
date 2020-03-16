import { Component, OnInit, ViewChild } from '@angular/core';
import { Data } from '../../_models/data';
import { ApiService } from '../../_services/api.service';
import { SnTimeline } from '../../_models/SnTimeline';
import { GlobalData } from '../../_models/globalData';
import { Chart } from "chart.js";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  fetchedData: Data[];
  fetchedNews: SnTimeline[];
  globalData: GlobalData[];
  itaData: Data[];
  country: Data[];

  isLoadingResults = true;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    

    this.apiService.getDataSn().subscribe((res: any[]) => {
      this.fetchedData = res['countrydata'][0];
      // this.fetchedNews = res['countrynewsitems'][0];
      console.log(this.fetchedData);
      // console.log(this.fetchedNews);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });

    this.apiService.getDataGlobal().subscribe((res: any[]) => {
      this.globalData = res['results'][0];
      // this.fetchedNews = res['countrynewsitems'][0];
      console.log(this.globalData);
      // console.log(this.fetchedNews);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });

    this.apiService.getDataIta().subscribe((res: any[]) => {
      this.itaData = res['countrydata'][0];
      this.country = res['countrydata'][0]['info'];
      // this.fetchedNews = res['countrynewsitems'][0];
      console.log(this.itaData);
      console.log(this.country);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }  

  //////////////////////////////////////////////////////////////////

}
