import { adminFeatureKey } from '@admin/data-access/store/admin.reducer';
import { localStorageSync } from 'ngrx-store-localstorage';

export const localStorageSyncMetaReducer = (reducer: unknown) => {
  return localStorageSync({
    keys: [adminFeatureKey],
    rehydrate: true,
  })(reducer);
};
