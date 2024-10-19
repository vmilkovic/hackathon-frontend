import { adminFeatureKey } from '@admin/data-access/store/admin.reducer';
import { supervisorFeatureKey } from '@supervisor/data-access/store/supervisor.reducer';
import { localStorageSync } from 'ngrx-store-localstorage';

export const localStorageSyncMetaReducer = (reducer: unknown) => {
  return localStorageSync({
    keys: [adminFeatureKey, supervisorFeatureKey],
    rehydrate: true,
  })(reducer);
};
