import { Component, inject } from '@angular/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { IMyReservation } from 'src/app/shared/models/my-reservation/my-reservation.model';

@Component({
  selector: 'app-my-reservation-documents',
  standalone: true,
  imports: [PdfViewerModule],
  templateUrl: './my-reservation-documents.component.html',
})
export class MyReservationDocumentsComponent {
  private dialogConfig = inject(DynamicDialogConfig);
  public reservation: IMyReservation = this.dialogConfig.data.reservation;
}
