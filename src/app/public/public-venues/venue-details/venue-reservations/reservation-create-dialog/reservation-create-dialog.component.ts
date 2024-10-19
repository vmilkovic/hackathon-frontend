import { Component, inject, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { IVenueReservation } from 'src/app/shared/models/venue/venue-reservation.model';
import { ReservationRequestsActions } from 'src/app/shared/store/reservation-requests/reservation-requests.actions';

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
export class ReservationCreateDialogComponent implements OnInit {
  private dialogConfig = inject(DynamicDialogConfig);
  private store = inject(Store);
  private keycloakService = inject(KeycloakService);

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
    purpose: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    oib: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    city: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    streetAddress: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    phone: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required],
    }), // TODO: Add phone number validator
    bankName: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    iban: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required],
    }), // TODO: Add IBAN validator
  });
  public reservation: Pick<IVenueReservation, 'startDate' | 'endDate'> =
    this.dialogConfig.data.reservation;

  private currentUser?: KeycloakProfile;

  private fillFormWithCurrentUser(): void {
    if (this.currentUser) {
      this.form.patchValue({
        firstName: this.currentUser.firstName,
        lastName: this.currentUser.lastName,
        email: this.currentUser.email,
      });
    }
  }

  public ngOnInit(): void {
    const isAuthenticated = this.keycloakService.isLoggedIn();
    if (isAuthenticated) {
      this.keycloakService.loadUserProfile().then((profile) => {
        this.currentUser = profile;
        this.fillFormWithCurrentUser();
      });
    }
  }

  public onSubmit(): void {
    const reservation = this.form.getRawValue();

    this.store.dispatch(
      ReservationRequestsActions.createReservationRequestForCurrentVenue({
        data: {
          ...reservation,
          startDate: this.reservation.startDate,
          endDate: this.reservation.endDate,
        },
      })
    );
  }
}
