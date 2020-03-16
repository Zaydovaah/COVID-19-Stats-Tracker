import { Time } from '@angular/common';

export class SnTimeline {
    timelineitems:[{
        
        newsid: string,
        title: string, 
        time: Time,
        url: string;
    }];
    stat: string;
}