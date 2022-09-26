const BAD_REQUEST_RESPONSE = {
    data: 'Se debe ingresar una banda',
    code: 400,
    message: 'Error en la busqueda'
}

const SUCCESSFULL_RESPONSE = (data) => {
    return {
        data,
        code: 200,
        message: 'Banda encontrada con exito'
    }
}

const FAVORITE_NOT_FOUND_RESPONSE = {
    data: 'Cancion no encontrada',
    code: 404,
    message: 'Error en la busqueda'
}

const FAVORITE_SUCCESSFULL_RESPONSE = (data) => {
    return {
        data,
        code: 200,
        message: 'Cancion agregada con exito'
    }
}

const INTERNAL_SERVER_ERROR = (error) => {
    return {
        error,
        message: "Error desconocido",
        code: 500
    }
}

module.exports = ({
    INTERNAL_SERVER_ERROR,
    SUCCESSFULL_RESPONSE,
    BAD_REQUEST_RESPONSE,
    FAVORITE_NOT_FOUND_RESPONSE,
    FAVORITE_SUCCESSFULL_RESPONSE
})