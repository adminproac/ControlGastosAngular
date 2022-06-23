import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import * as fromCCostosActions from '../store/actions/ccostos.actions';
import { ERROR } from '../store/actions';
import { CcostosService } from './services';



@Injectable({
    providedIn: 'root'
})
export class CCostosEffects {
    constructor(private actions$: Actions,
        private ccostosService: CcostosService) { }

    effectSelect$ = createEffect(() => this.actions$.pipe(
        ofType(fromCCostosActions.SELECT),
        switchMap(() =>
            this.ccostosService.getCCostos().pipe(
                map(data => fromCCostosActions.SELECT_SUCCESS({ payload: data })),
                catchError(error => of(ERROR({ payload: error }))))
        )));

    effectDelete$ = createEffect(() => this.actions$.pipe(
        ofType(fromCCostosActions.DELETE),
        switchMap((action) =>
            this.ccostosService.delCCostos(action.payload).pipe(
                map(() => fromCCostosActions.DELETE_SUCCESS({ payload: action.payload })),
                catchError(error => of(ERROR({ payload: error }))))
        )));

    effectUpdate$ = createEffect(() => this.actions$.pipe(
        ofType(fromCCostosActions.UPDATE),
        switchMap((action) =>
            this.ccostosService.updCCostos(action.payload).pipe(
                map(() => fromCCostosActions.UPDATE_SUCCESS({ payload: action.payload })),
                catchError(error => of(ERROR({ payload: error }))))
        )));

    effectInsert$ = createEffect(() => this.actions$.pipe(
        ofType(fromCCostosActions.INSERT),
        switchMap((action) =>
            this.ccostosService.insCCostos(action.payload).pipe(
                map(() => fromCCostosActions.INSERT_SUCCESS({ payload: action.payload })),
                catchError(error => of(ERROR({ payload: error }))))
        )));
}


