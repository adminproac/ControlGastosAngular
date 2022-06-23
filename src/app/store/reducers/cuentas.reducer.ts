import { createReducer, on } from '@ngrx/store';
import * as fromActionsCuentas from '../actions/cuentas.actions';
import { initialStateCGastos } from '../models';

export const reducerCuentas: any = createReducer(
    initialStateCGastos.cuentas,
    on(fromActionsCuentas.CARGAR, (state) => ({ ...state, doing: true })),
    on(fromActionsCuentas.CARGAR_SUCCESS, (state, action) => ({ ...state, doing: false, loaded: true, data: action.payload })),
    on(fromActionsCuentas.CARGAR_ERROR, (state, action) => ({ ...state, doing: false, error: action.payload }))
)


