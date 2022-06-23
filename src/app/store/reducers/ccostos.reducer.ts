import { createReducer, on } from '@ngrx/store';
import { ERROR } from '../actions';
import * as fromActionsCCostos from '../actions/ccostos.actions';
import { initialStateCCostos } from '../models';

export const reducerCCostos: any = createReducer(
    initialStateCCostos,
    on(fromActionsCCostos.SELECT, (state, action) => ({ ...state, doing: true })),
    on(fromActionsCCostos.SELECT_SUCCESS, (state, action) => ({ ...state, data: action.payload, doing: false })),
    on(fromActionsCCostos.DELETE, (state) => ({ ...state, doing: true })),
    on(fromActionsCCostos.DELETE_SUCCESS, (state, action) => ({ ...state, data: state.data.filter((ccosto) => (ccosto.id !== action.payload)), doing: false })),
    on(fromActionsCCostos.UPDATE, (state, action) => ({ ...state, doing: true })),
    on(fromActionsCCostos.UPDATE_SUCCESS, (state, action) =>
        ({ ...state, data: state.data.map((ccosto) => (ccosto.id === action.payload.id) ? action.payload : ccosto), doing: false })),
    on(fromActionsCCostos.INSERT, (state, action) => ({ ...state, doing: true })),
    on(fromActionsCCostos.INSERT_SUCCESS, (state, action) => ({ ...state, data: [...state.data, action.payload], doing: false })),
    on(ERROR, (state, action) => ({ ...state, doing: false, error: action.payload }))
)


