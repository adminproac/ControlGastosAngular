export interface pago {
    id?: number,
    ccostoId?: number,
    gastoId?: number,
    valorpago?: number,
    fechapago?: Date
}

export interface statePagos {
    data: pago[],
    doing: boolean,
    error: string
}


export const initialStatePagos: statePagos = {
    data: [],
    doing: false,
    error: ""

}