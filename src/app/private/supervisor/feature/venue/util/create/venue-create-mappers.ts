import { Action } from '@ngrx/store';
import { omit } from 'lodash';
import { CreateVenueRequest } from '../../data-access/models/create/venue-create-api.model';
import { CreateVenueFormInputFields } from '../../data-access/models/create/venue-create-store.model';

export const mapCreateVenueFormInputFieldsToCreateVenueRequest = (
  createVenueFormInputFields: CreateVenueFormInputFields & Action
): CreateVenueRequest => omit(createVenueFormInputFields, 'type');
