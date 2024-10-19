import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { IVenueReservation } from 'src/app/shared/models/venue/venue-reservation.model';
import { ReservationsActions } from 'src/app/shared/store/reservations/reservations.actions';

@Component({
  selector: 'app-reservation-create-dialog',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
  ],
  templateUrl: './reservation-create-dialog.component.html',
})
export class ReservationCreateDialogComponent {
  private dialogConfig = inject(DynamicDialogConfig);
  private store = inject(Store);
  private actions = inject(Actions);

  public form = new FormGroup({
    firstName: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    lastName: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    email: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    description: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    // phone: new FormControl<string>('', {
    //   nonNullable: true,
    //   validators: [Validators.required],
    // }), // TODO: Add phone number validator
  });
  public reservation: Pick<IVenueReservation, 'startDate' | 'endDate'> =
    this.dialogConfig.data.reservation;

  public onSubmit(): void {
    const reservation = this.form.getRawValue();

    this.store.dispatch(
      ReservationsActions.createReservationForCurrentVenue({
        data: {
          ...reservation,
          startDate: this.reservation.startDate,
          endDate: this.reservation.endDate,
        },
      })
    );
  }
}
