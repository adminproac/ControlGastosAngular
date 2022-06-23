export interface ccosto {
    id?: number,
    nombre?: string
}

export interface stateCCostos {
    data: ccosto[],
    doing: boolean,
    error: string
}

export const initialStateCCostos: stateCCostos = {
    data: [],
    doing: true,
    error: ""
}

