

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as fromActionsCuentas from '../store/actions/cuentas.actions';
import { CuentasService } from './services';
import { switchMap, catchError, map, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CuentasEffects {
    constructor(private actions$: Actions,
        private cuentasService: CuentasService) { }

    actionName$ = createEffect(() => this.actions$.pipe(
        ofType(fromActionsCuentas.CARGAR),
        switchMap(() => (this.cuentasService.getCuentas().pipe(
            map((resp) => (fromActionsCuentas.CARGAR_SUCCESS({ payload: resp }))),
            catchError((error) => of(fromActionsCuentas.CARGAR_ERROR({ payload: error })))
        )))
    ));

}