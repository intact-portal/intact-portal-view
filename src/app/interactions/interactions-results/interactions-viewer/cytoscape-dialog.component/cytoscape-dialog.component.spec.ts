import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {NO_ERRORS_SCHEMA} from '@angular/core';
import {CytoscapeDialogComponent} from './cytoscape-dialog.component';

describe('CytoscapeDialogComponent', () => {
    let component: CytoscapeDialogComponent;
    let fixture: ComponentFixture<CytoscapeDialogComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ CytoscapeDialogComponent ],
            schemas: [NO_ERRORS_SCHEMA]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CytoscapeDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
