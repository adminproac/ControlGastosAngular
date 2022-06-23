export interface gasto {
    id?: number,
    nombre?: string
}

export interface stateGastos {
    data: gasto[],
    doing: boolean,
    error: string
}

export const initialStateGastos: stateGastos = {
    data: [],
    doing: true,
    error: ""

}