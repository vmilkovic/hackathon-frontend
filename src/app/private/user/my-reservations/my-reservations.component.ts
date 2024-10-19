import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { IMyReservation } from 'src/app/shared/models/my-reservation/my-reservation.model';
import { myReservationsFeature } from 'src/app/shared/store/my-reservations/my-reservations.store';
import { MyReservationDocumentsComponent } from './my-reservation-documents/my-reservation-documents.component';

@Component({
  selector: 'app-my-reservations',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    CardModule,
    DynamicDialogModule,
  ],
  providers: [DialogService],
  templateUrl: './my-reservations.component.html',
})
export class MyReservationsComponent {
  private store = inject(Store);
  private dialogService = inject(DialogService);
  public myReservations = this.store.selectSignal(
    myReservationsFeature.selectMyReservations
  );

  public openDocuments(reservation: IMyReservation): void {
    this.dialogService.open(MyReservationDocumentsComponent, {
      data: {
        reservation,
      },
      header: 'Dokumenti rezervacije',
      maximizable: true,
      contentStyle: {
        width: '1920px',
        'max-width': '75vw',
        overflow: 'hidden',
      },
    });
  }
}
