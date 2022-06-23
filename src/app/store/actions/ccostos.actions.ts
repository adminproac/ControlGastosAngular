import { createAction, props, State } from '@ngrx/store';
import { ccosto } from '../models';

export const SELECT = createAction('[Ccostos] Select Centros de Costo del   API');
export const DELETE = createAction('[Ccostos] Delete Centro  de Costo del   API', props<{ payload: number }>());
export const UPDATE = createAction('[Ccostos] Update Centro  de Costo en el API', props<{ payload: ccosto }>());
export const INSERT = createAction('[Ccostos] Insert Centro  de Costo en el API', props<{ payload: ccosto }>());

export const SELECT_SUCCESS = createAction('[Ccostos] Select Centros de Costos del   Store', props<{ payload: ccosto[] }>());
export const DELETE_SUCCESS = createAction('[Ccostos] Delete Centro  de Costo  del   Store', props<{ payload: number }>());
export const UPDATE_SUCCESS = createAction('[Ccostos] Update Centro  de Costo  en el Store', props<{ payload: ccosto }>());
export const INSERT_SUCCESS = createAction('[Ccostos] Insert Centro  de Costo  en el Store', props<{ payload: ccosto }>());




