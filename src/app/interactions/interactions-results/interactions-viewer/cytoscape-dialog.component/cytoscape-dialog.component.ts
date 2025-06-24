import {Component} from '@angular/core';
import {CytoscapeDesktopService} from '../../../shared/service/cytoscape-desktop.service';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
    selector: 'ip-cytoscape-dialog',
    templateUrl: './cytoscape-dialog.component.html',
    styleUrls: ['./cytoscape-dialog.component.css']
})
export class CytoscapeDialogComponent {

    constructor(public cytoscape: CytoscapeDesktopService,
                public dialogRef: MatDialogRef<CytoscapeDialogComponent>) {
    }

    closeDialog(): void {
        this.dialogRef.close();
    }
}
