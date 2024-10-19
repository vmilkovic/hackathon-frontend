import { ValidatorFn } from '@angular/forms';
import { IVenueReservation } from '../../models/venue/venue-reservation.model';

/**
 * Validator function to check the availability of a reservation date range.
 *
 * @param startDateControlName - The name of the form control for the start date.
 * @param endDateControlName - The name of the form control for the end date.
 * @param disabledDates - An array of dates that are unavailable for reservation.
 * @returns A ValidatorFn that checks if the selected date range is available.
 *
 * The validator will return `null` if the date range is available or if either
 * the start date or end date is not provided. If the date range is not available,
 * it will return an object with the key `reservationUnavailable` set to `true`.
 */
export function reservationAvailabilityValidator(
  startDateControlName: string,
  endDateControlName: string,
  disabledDates: Pick<IVenueReservation, 'startDate' | 'endDate'>[]
): ValidatorFn {
  return (formGroup) => {
    const startDate = formGroup.get(startDateControlName)?.value as Date | null;
    const endDate = formGroup.get(endDateControlName)?.value as Date | null;

    // If no startDate or endDate, return null
    if (!startDate || !endDate) {
      return null;
    }

    // Check if the selected date range is available
    const isAvailable = !disabledDates.some((date) => {
      return (
        (startDate >= date.startDate && startDate <= date.endDate) ||
        (endDate >= date.startDate && endDate <= date.endDate) ||
        (startDate <= date.startDate && endDate >= date.endDate)
      );
    });

    return isAvailable ? null : { reservationUnavailable: true };
  };
}
