import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppCGastos, gasto } from '../../store';
import * as fromActionsGastos from '../../store/actions/gastos.actions'
import { mensajeConfirm, mensajeOk, mensajeError } from '../../helpers/mensajes';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.scss']
})
export class GastosComponent implements OnInit {
  public listGastos: gasto[] = []
  editando: boolean
  doing: boolean


  GastosForm = new FormGroup({
    id: new FormControl('', [Validators.required, Validators.minLength(2)]),
    nombre: new FormControl('', [Validators.required, Validators.minLength(2)])
  })


  constructor(private store: Store<AppCGastos>) {
    this.doing = true
    this.store.select('gastos').subscribe((resp) => {
      setTimeout(() => {
        this.doing = resp.doing
        this.listGastos = resp.data
      }, 1000);
    })
    this.editando = false
  }

  ngOnInit(): void {
    this.store.dispatch(fromActionsGastos.SELECT())

  }

  Eliminar = (id?: number) => {
    if (id !== undefined) {
      mensajeConfirm('Gasto', (resp: boolean) => {
        if (resp) {
          try {
            this.store.dispatch(fromActionsGastos.DELETE({ payload: id }))
          } catch (error) {
            this.store.select('gastos').subscribe((resp => (mensajeError(resp.error))))
          }
        }
      })

    }
  }

  Editar = (gasto: gasto) => {
    this.editando = true
    this.GastosForm.setValue(
      {
        id: gasto.id,
        nombre: gasto.nombre
      })
  }

  onSubmit = () => {
    if (this.editando) this.store.dispatch(fromActionsGastos.UPDATE({ payload: this.GastosForm.value }))
    else this.store.dispatch(fromActionsGastos.INSERT({ payload: this.GastosForm.value }))
    mensajeOk('Gasto', this.editando)
  }

  Nuevo = () => {
    this.editando = false
    this.GastosForm.setValue(
      {
        id: this.listGastos.length + 1,
        nombre: ''
      })
  }


}

