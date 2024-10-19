import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  inject,
  OnDestroy,
  OnInit,
  signal,
  Signal,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import {
  DialogService,
  DynamicDialogModule,
  DynamicDialogRef,
} from 'primeng/dynamicdialog';
import { Subscription } from 'rxjs';
import { IDateTemplate } from 'src/app/shared/models/primeng/calendar/date-template.model';
import { IVenueReservation } from 'src/app/shared/models/venue/venue-reservation.model';
import { ReservationRequestsActions } from 'src/app/shared/store/reservations/reservation-requests.actions';
import { venuesFeature } from 'src/app/shared/store/venues/venues.store';
import { dateRangeValidator } from 'src/app/shared/validators/date/date-range.validator';
import { reservationAvailabilityValidator } from 'src/app/shared/validators/reservation-availability/reservation-availability.validator';
import { ReservationCreateDialogComponent } from './reservation-create-dialog/reservation-create-dialog.component';

@Component({
  selector: 'app-venue-reservations',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CalendarModule,
    ButtonModule,
    DynamicDialogModule,
  ],
  providers: [DialogService],
  templateUrl: './venue-reservations.component.html',
})
export class VenueReservationsComponent implements OnInit, OnDestroy {
  private store = inject(Store);
  private dialogService = inject(DialogService);
  private subscriptions: Subscription[] = [];
  private reservationsDialogRef: DynamicDialogRef | null = null;
  private actions = inject(Actions);

  public disabledDates: Date[] = [new Date()]; // Already reserved dates
  public minDate: Date = new Date(); // No reservations in the past
  public maxDate: Date = new Date(
    this.minDate.getFullYear() + 1,
    this.minDate.getMonth(),
    this.minDate.getDate()
  ); // No reservations more than 1 year in advance

  public partialReservationOnChosenDate = signal<Pick<
    IVenueReservation,
    'startDate' | 'endDate'
  > | null>(null);

  public reservations = this.store.selectSignal(
    venuesFeature.selectReservationsForCurrentVenue
  );

  public partialReservationDates: Signal<Set<number>> = computed(() => {
    const datesSet = new Set<number>();

    this.reservations().forEach((reservation) => {
      const startDate = new Date(reservation.startDate);
      const endDate = new Date(reservation.endDate);
      const currentDate = new Date(startDate);

      // We must ignore the time part of the date while comparing
      currentDate.setHours(0, 0, 0, 0);
      endDate.setHours(0, 0, 0, 0);

      while (currentDate <= endDate) {
        datesSet.add(new Date(currentDate).getTime());
        currentDate.setDate(currentDate.getDate() + 1);
      }
    });

    return datesSet;
  });

  public form = new FormGroup(
    {
      startDate: new FormControl<Date | null>(null, Validators.required),
      endDate: new FormControl<Date | null>(null, Validators.required),
    },
    {
      validators: [
        dateRangeValidator('startDate', 'endDate'),
        reservationAvailabilityValidator(
          'startDate',
          'endDate',
          this.reservations()
        ),
      ],
    }
  );

  public ngOnInit(): void {
    this.subscriptions.push(
      this.form.valueChanges.subscribe((value) => {
        const chosenStartDate = structuredClone(value.startDate);
        const chosenEndDate = structuredClone(value.endDate);
        const reservationDates = this.reservations();

        // Ignore the time part of the date while comparing
        chosenStartDate?.setHours(0, 0, 0, 0);
        chosenEndDate?.setHours(0, 0, 0, 0);

        const reservationFound = reservationDates.find((reservation) => {
          const reservationStart = new Date(reservation.startDate);
          const reservationEnd = new Date(reservation.endDate);

          // Reset the time part for comparison
          reservationStart.setHours(0, 0, 0, 0);
          reservationEnd.setHours(0, 0, 0, 0);

          // Check if either the start or end date matches the reservation range
          const isStartDateWithinRange =
            chosenStartDate &&
            chosenStartDate.getTime() >= reservationStart.getTime() &&
            chosenStartDate.getTime() <= reservationEnd.getTime();

          const isEndDateWithinRange =
            chosenEndDate &&
            chosenEndDate.getTime() >= reservationStart.getTime() &&
            chosenEndDate.getTime() <= reservationEnd.getTime();

          return isStartDateWithinRange || isEndDateWithinRange;
        });

        this.partialReservationOnChosenDate.set(reservationFound ?? null);
      })
    );

    this.subscriptions.push(
      this.actions
        .pipe(
          ofType(
            ReservationRequestsActions.createReservationRequestForCurrentVenueSuccess
          )
        )
        .subscribe(() => {
          this.reservationsDialogRef?.close();
        })
    );
  }

  public dateIncludesPartialReservation(templateDate: IDateTemplate): boolean {
    const date = new Date(
      templateDate.year,
      templateDate.month,
      templateDate.day
    );
    return this.partialReservationDates().has(date.getTime());
  }

  public onSubmit(): void {
    if (this.form.valid) {
      const reservation = this.form.value;
      this.reservationsDialogRef = this.dialogService.open(
        ReservationCreateDialogComponent,
        {
          data: {
            reservation,
          },
          header: 'Detalji o rezervaciji',
          contentStyle: {
            width: '500px',
            'max-width': '75vw',
          },
        }
      );
    }
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());

    if (this.reservationsDialogRef) {
      this.reservationsDialogRef.close();
    }
  }
}
