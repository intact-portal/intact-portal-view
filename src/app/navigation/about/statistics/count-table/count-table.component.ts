import {Component, Input, OnInit} from '@angular/core';
import * as d3 from 'd3';

@Component({
    selector: 'ip-count-table',
    templateUrl: './count-table.component.html',
    styleUrls: ['./count-table.component.css'],
    standalone: false
})
export class CountTableComponent implements OnInit {
    @Input() dataPath: string;
    data: { feature: string, amount: number }[];

    constructor() {
    }

    ngOnInit(): void {
        d3.csv(this.dataPath, rawRow => ({
            feature: rawRow.Feature,
            amount: +rawRow.Count,
        })).then(value => {
            this.data = value.sort((a, b) => b.amount - a.amount);
        })
    }

}
