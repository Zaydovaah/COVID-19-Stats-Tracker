import { Time } from '@angular/common';

export class Data {
    countrydata:[{
        info:{
            ourid: number, 
            title: string, 
            code: string,
            source:string
        },
            total_cases: number, 
            total_recovered: number, 
            total_unresolved: number,
            total_deaths: number, 
            total_new_cases_today: number, 
            total_new_deaths_today: number, 
            total_active_cases: number, 
            total_serius_cases: number
        }]; 
    countrynewsitems:[{
        1:{
            newsid: string,
            title: string, 
            time: Time,
            url: string
        },
            stat: string
        }]

}