import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppCGastos, pago } from 'src/app/store';
import *  as fromActionsPagos from '../../store/actions/pagos.actions'

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.scss']
})
export class PagosComponent implements OnInit {
  listPagos: pago[] = []

  constructor(private store: Store<AppCGastos>) {
    this.store.select('pagos').subscribe((resp) => { this.listPagos = resp.data })
  }

  ngOnInit(): void {
    this.store.dispatch(fromActionsPagos.CARGAR())
  }

}

