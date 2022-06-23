import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppCGastos, ccosto } from '../../store';
import * as fromActionsCCostos from '../../store/actions/ccostos.actions'
import { mensajeConfirm, mensajeOk, mensajeError } from '../../helpers/mensajes';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ccostos',
  templateUrl: './ccostos.component.html',
  styleUrls: ['./ccostos.component.scss']
})
export class CcostosComponent implements OnInit {
  public listCCosto: ccosto[] = []
  editando: boolean
  doing: boolean

  ccostosForm = new FormGroup({
    id: new FormControl('', [Validators.required, Validators.minLength(2)]),
    nombre: new FormControl('', [Validators.required, Validators.minLength(2)])
  })


  constructor(private store: Store<AppCGastos>) {
    this.doing = true
    this.store.select('ccostos').subscribe((resp) => {
      setTimeout(() => {
        this.doing = resp.doing
        this.listCCosto = resp.data
      }, 1000);
    })
    this.editando = false
  }

  ngOnInit(): void {
    this.store.dispatch(fromActionsCCostos.SELECT())

  }

  Eliminar = (id?: number) => {
    if (id !== undefined) {
      mensajeConfirm('Centro de Costo', (resp: boolean) => {
        if (resp) {
          try {
            this.store.dispatch(fromActionsCCostos.DELETE({ payload: id }))
          } catch (error) {
            this.store.select('ccostos').subscribe((resp => (mensajeError(resp.error))))
          }
        }
      })

    }
  }

  Editar = (ccosto: ccosto) => {
    this.editando = true
    this.ccostosForm.setValue(
      {
        id: ccosto.id,
        nombre: ccosto.nombre
      })
  }

  onSubmit = () => {
    if (this.editando) this.store.dispatch(fromActionsCCostos.UPDATE({ payload: this.ccostosForm.value }))
    else this.store.dispatch(fromActionsCCostos.INSERT({ payload: this.ccostosForm.value }))
    mensajeOk('Centro de Costo', this.editando)
  }

  Nuevo = () => {
    this.editando = false
    this.ccostosForm.setValue(
      {
        id: this.listCCosto.length + 1,
        nombre: ''
      })
  }


}

