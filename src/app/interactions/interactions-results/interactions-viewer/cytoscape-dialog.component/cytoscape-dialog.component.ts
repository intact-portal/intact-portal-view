import {Component} from '@angular/core';
import {CytoscapeDesktopService} from '../../../shared/service/cytoscape-desktop.service';
import {MatLegacyDialogRef as MatDialogRef} from '@angular/material/legacy-dialog';

@Component({
    selector: 'ip-cytoscape-dialog',
    templateUrl: './cytoscape-dialog.component.html',
    styleUrls: ['./cytoscape-dialog.component.css']
})
export class CytoscapeDialogComponent {

    constructor(public cytoscape: CytoscapeDesktopService,
                public dialogRef: MatDialogRef<CytoscapeDialogComponent>) {

        this.cytoscape.cytoscapeLoadedEvent.subscribe(_ => {
            // Wait 2 seconds to close the dialog,
            // to allow users to see the message that data is loaded in Cytoscape
            setTimeout(() => this.closeDialog(), 2_000);
        });
    }

    closeDialog(): void {
        this.dialogRef.close();
    }
}
