import { createAction, props } from '@ngrx/store';

export const CARGAR = createAction(
    '[Cuentas] Cargar Cuentas desde el Initial State y desde el API');

export const CARGAR_SUCCESS = createAction(
    '[Cuentas] Cargar Cuentas al Store', props<{ payload: any }>());

export const CARGAR_ERROR = createAction(
    '[Cuentas] Cargar Cuentas Error', props<{ payload: any }>());