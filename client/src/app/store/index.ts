import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import {storeFreeze} from 'ngrx-store-freeze';
import {routerReducer} from '@ngrx/router-store';

export interface AppState {

}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer
};

export const metaReducers: MetaReducer<AppState>[] =
  !environment.production ? [storeFreeze] : [];
