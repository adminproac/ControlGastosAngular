import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { Reducers } from './store';
import { EffectsModule } from '@ngrx/effects';
import { Effects } from './effects';
import { CcostosComponent } from './components/ccostos/ccostos.component';
import { GastosComponent } from './components/gastos/gastos.component';
import { PagosComponent } from './components/pagos/pagos.component';
import { CuentasComponent } from './components/cuentas/cuentas.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: 'CCostos', component: CcostosComponent },
  { path: 'Gastos', component: GastosComponent },
  { path: 'Pagos', component: PagosComponent },
  { path: 'Cuentas', component: CuentasComponent },
  { path: '', redirectTo: '/component/CCostosComponent', pathMatch: 'full' },
  { path: '**', component: CcostosComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CcostosComponent,
    GastosComponent,
    PagosComponent,
    CuentasComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(Reducers),
    StoreDevtoolsModule.instrument({ maxAge: 10 }),
    HttpClientModule,
    EffectsModule.forRoot(Effects),
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
