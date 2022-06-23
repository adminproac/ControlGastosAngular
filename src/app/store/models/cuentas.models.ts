export interface cuenta {
    nombreccosto?: string,
    nombregasto?: string,
    valorpago?: number,
    fechapago?: Date,
    ccostoId?: number,
    gastoId?: number
}

export interface stateCuentas {
    data: cuenta[],
    doing: boolean,
    error: string
}

export const initialStateCuentas: stateCuentas = {
    data: [],
    doing: false,
    error: ""

}