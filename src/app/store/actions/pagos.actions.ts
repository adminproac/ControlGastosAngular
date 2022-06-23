import { createAction, props } from '@ngrx/store';

export const CARGAR = createAction(
    '[Pagos] Cargar Pagosdesde el Initial State y desde el API');

export const CARGAR_SUCCESS = createAction(
    '[Pagos] Cargar Pagos al Store', props<{ payload: any }>());

export const CARGAR_ERROR = createAction(
    '[Pagos] Cargar Pagos Error', props<{ payload: any }>());
