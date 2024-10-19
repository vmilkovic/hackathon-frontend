import { ValidatorFn } from '@angular/forms';

/**
 * Validator function to check if a date range is valid.
 * Ensures that the start date is before or equal to the end date.
 *
 * @param startDateControlName - The name of the form control for the start date.
 * @param endDateControlName - The name of the form control for the end date.
 * @returns A ValidatorFn that returns null if the date range is valid, or an object with the key `dateRangeInvalid` set to true if the date range is invalid.
 */
export function dateRangeValidator(
  startDateControlName: string,
  endDateControlName: string
): ValidatorFn {
  return (formGroup) => {
    const startDate = formGroup.get(startDateControlName)?.value as Date | null;
    const endDate = formGroup.get(endDateControlName)?.value as Date | null;

    if (!startDate || !endDate) {
      return null; // No validation if one of the dates is missing
    }

    // Check if startDate is before or equal to endDate
    return startDate <= endDate ? null : { dateRangeInvalid: true };
  };
}
