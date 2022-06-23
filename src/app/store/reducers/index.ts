import { ActionReducerMap } from "@ngrx/store";
import { AppCGastos } from "../models";
import { reducerCCostos } from "./ccostos.reducer";
import { reducerCuentas } from "./cuentas.reducer";
import { reducerGastos } from "./gastos.reducer";
import { reducerPagos } from "./pagos.reducer";

export const Reducers: ActionReducerMap<AppCGastos> = {
    ccostos: reducerCCostos,
    gastos: reducerGastos,
    pagos: reducerPagos,
    cuentas: reducerCuentas
};

