import { initialStateCCostos, stateCCostos } from './ccostos.models'
import { initialStateCuentas, stateCuentas } from './cuentas.models'
import { initialStateGastos, stateGastos } from './gastos.models'
import { initialStatePagos, statePagos } from './pagos.models'

export interface AppCGastos {
    ccostos: stateCCostos,
    gastos: stateGastos,
    pagos: statePagos,
    cuentas: stateCuentas
}

export const initialStateCGastos: AppCGastos = {
    ccostos: initialStateCCostos,
    gastos: initialStateGastos,
    pagos: initialStatePagos,
    cuentas: initialStateCuentas
}

export * from './ccostos.models'
export * from './gastos.models'
export * from './pagos.models'
export * from './cuentas.models'


