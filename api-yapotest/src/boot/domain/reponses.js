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

const INTERNAL_SERVER_ERROR = (error) => {
    return {
        error,
        message: "error al buscar banda",
        code: 500
    }
}

module.exports = ({
    INTERNAL_SERVER_ERROR,
    SUCCESSFULL_RESPONSE,
    BAD_REQUEST_RESPONSE
})