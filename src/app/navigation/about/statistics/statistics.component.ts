import {AfterViewInit, Component, OnInit} from '@angular/core';
import {environment} from '../../../../environments/environment';

@Component({
    selector: 'ip-statistics',
    templateUrl: './statistics.component.html',
    styleUrls: ['./statistics.component.css']
})

export class StatisticsComponent implements OnInit, AfterViewInit {
    stat_url = environment.statistics_url;

    constructor() {
    }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
    }


}
