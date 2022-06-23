import { createReducer, on } from '@ngrx/store';
import * as fromActionsPagos from '../actions/pagos.actions'
import { initialStateCGastos } from '../models';


export const reducerPagos: any = createReducer(
    initialStateCGastos.pagos,
    on(fromActionsPagos.CARGAR, (state) => ({ ...state, doing: true })),
    on(fromActionsPagos.CARGAR_SUCCESS, (state, action) => ({ ...state, doing: false, loaded: true, data: action.payload })),
    on(fromActionsPagos.CARGAR_ERROR, (state, action) => ({ ...state, doing: false, error: action.payload }))
)


