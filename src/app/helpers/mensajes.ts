import Swal from "sweetalert2";

export const mensajeError = (msg: string) => {
    Swal.fire({
        icon: 'error',
        title: 'Ha ocurrido un error...',
        text: msg
        // footer: '<a href="">Why do I have this issue?</a>'
    })
}

export const mensajeOk = (msg: string, accion: boolean) => {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: `${msg} ${accion ? 'Actualizado' : 'Insertado'}`,
        showConfirmButton: false,
        timer: 1500
    })
}

export const mensajeConfirm = (msg: string, f: any) => {
    Swal.fire({
        title: 'Esta usted seguro?',
        // text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            f(result.isConfirmed)
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${msg} Eliminado correctamente!!}`,
                showConfirmButton: false,
                timer: 1500
            })

        }
    })
}