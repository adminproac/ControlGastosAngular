import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import * as fromGastosActions from '../store/actions/gastos.actions';
import { ERROR } from '../store/actions';
import { GastosService } from './services';



@Injectable({
    providedIn: 'root'
})
export class GastosEffects {
    constructor(private actions$: Actions,
        private gastosService: GastosService) { }

    effectSelect$ = createEffect(() => this.actions$.pipe(
        ofType(fromGastosActions.SELECT),
        switchMap(() =>
            this.gastosService.getGastos().pipe(
                map(data => fromGastosActions.SELECT_SUCCESS({ payload: data })),
                catchError(error => of(ERROR({ payload: error }))))
        )));

    effectDelete$ = createEffect(() => this.actions$.pipe(
        ofType(fromGastosActions.DELETE),
        switchMap((action) =>
            this.gastosService.delGasto(action.payload).pipe(
                map(() => fromGastosActions.DELETE_SUCCESS({ payload: action.payload })),
                catchError(error => of(ERROR({ payload: error }))))
        )));

    effectUpdate$ = createEffect(() => this.actions$.pipe(
        ofType(fromGastosActions.UPDATE),
        switchMap((action) =>
            this.gastosService.updGasto(action.payload).pipe(
                map(() => fromGastosActions.UPDATE_SUCCESS({ payload: action.payload })),
                catchError(error => of(ERROR({ payload: error }))))
        )));

    effectInsert$ = createEffect(() => this.actions$.pipe(
        ofType(fromGastosActions.INSERT),
        switchMap((action) =>
            this.gastosService.insGasto(action.payload).pipe(
                map(() => fromGastosActions.INSERT_SUCCESS({ payload: action.payload })),
                catchError(error => of(ERROR({ payload: error }))))
        )));
}


