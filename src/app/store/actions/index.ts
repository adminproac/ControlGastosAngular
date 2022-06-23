import { createAction, props } from "@ngrx/store";
export const ERROR = createAction('Error en el API', props<{ payload: string }>());
export * from '../actions/ccostos.actions'