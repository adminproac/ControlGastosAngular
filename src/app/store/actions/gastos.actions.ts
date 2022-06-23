import { createAction, props, State } from '@ngrx/store';
import { gasto } from '../models';

export const SELECT = createAction('[Gastos] Select Gastos del   API');
export const DELETE = createAction('[Gastos] Delete Gasto  del   API', props<{ payload: number }>());
export const UPDATE = createAction('[Gastos] Update Gasto  en el API', props<{ payload: gasto }>());
export const INSERT = createAction('[Gastos] Insert Gasto  en el API', props<{ payload: gasto }>());

export const SELECT_SUCCESS = createAction('[Gastos] Select Gastos del   Store', props<{ payload: gasto[] }>());
export const DELETE_SUCCESS = createAction('[Gastos] Delete Gasto  del   Store', props<{ payload: number }>());
export const UPDATE_SUCCESS = createAction('[Gastos] Update Gasto  en el Store', props<{ payload: gasto }>());
export const INSERT_SUCCESS = createAction('[Gastos] Insert Gasto  en el Store', props<{ payload: gasto }>());