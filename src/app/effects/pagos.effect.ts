import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as fromActionsPagos from '../store/actions/pagos.actions';
import { switchMap, catchError, map, of } from 'rxjs';
import { PagosService } from './services';

@Injectable({
    providedIn: 'root'
})
export class PagosEffects {
    constructor(private actions$: Actions,
        private pagoServicio: PagosService) { }

    actionName$ = createEffect(() => this.actions$.pipe(
        ofType(fromActionsPagos.CARGAR),
        switchMap(() => (this.pagoServicio.getPagos().pipe(
            map((resp) => (fromActionsPagos.CARGAR_SUCCESS({ payload: resp }))),
            catchError((error) => of(fromActionsPagos.CARGAR_ERROR(error)))
        )))

    ));

}