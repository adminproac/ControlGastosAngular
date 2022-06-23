import { createReducer, on } from '@ngrx/store';
import { ERROR } from '../actions';
import * as fromActionsGastos from '../actions/gastos.actions';
import { initialStateCGastos } from '../models';

export const reducerGastos: any = createReducer(
    initialStateCGastos.gastos,
    on(fromActionsGastos.SELECT, (state, action) => ({ ...state, doing: true })),
    on(fromActionsGastos.SELECT_SUCCESS, (state, action) => ({ ...state, data: action.payload, doing: false })),
    on(fromActionsGastos.DELETE, (state) => ({ ...state, doing: true })),
    on(fromActionsGastos.DELETE_SUCCESS, (state, action) => ({ ...state, data: state.data.filter((gasto) => (gasto.id !== action.payload)), doing: false })),
    on(fromActionsGastos.UPDATE, (state, action) => ({ ...state, doing: true })),
    on(fromActionsGastos.UPDATE_SUCCESS, (state, action) =>
        ({ ...state, data: state.data.map((gasto) => (gasto.id === action.payload.id) ? action.payload : gasto), doing: false })),
    on(fromActionsGastos.INSERT, (state, action) => ({ ...state, doing: true })),
    on(fromActionsGastos.INSERT_SUCCESS, (state, action) => ({ ...state, data: [...state.data, action.payload], doing: false })),
    on(ERROR, (state, action) => ({ ...state, doing: false, error: action.payload }))
)



