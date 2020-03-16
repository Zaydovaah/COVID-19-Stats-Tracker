// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: "https://thevirustracker.com/free-api?countryTotal=SN",

  apiUrlItaly: "https://thevirustracker.com/free-api?countryTotal=IT",

  apiUrlChina: "https://thevirustracker.com/free-api?countryTotal=CN",

  apiUrlGlobal: "https://thevirustracker.com/free-api?global=stats",

  apiGlobalTimelineUrl: "https://thevirustracker.com/timeline/map-data.json",

  apiSnTimelineUrl: "https://thevirustracker.com/free-api?countryTimeline=SN"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
