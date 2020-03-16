
export class GlobalData {
    date: Date;
    data:[{
        countrycode: string;
        countrylabel: string;showcountrylabelcases: string;labelpositioncases: string;showcountrylabeldeaths: string;labelpositiondeaths: string;showcountrylabelrecovered: string;labelpositionrecovered: string;
        casesoverride: string;
        deathsoverride: string;recoveredoverride: string;
        columnsonrightshouldbeemptywhennotinuseifyouenteranumberitwillalwaysshowunlessyoudeleteit: string;emergencycasesoverride: string;emergencydeathsoverride: string;
        totalcases: string;
        totaldeaths: number;
        totalrecovered: number;
    }]

}