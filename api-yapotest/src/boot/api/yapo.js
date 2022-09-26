const { BAD_REQUEST_RESPONSE, SUCCESSFULL_RESPONSE, INTERNAL_SERVER_ERROR } = require('../domain/reponses')

module.exports = app => {
  app.context.api.yapo = {};

  async function searchTrack(request) {
    console.log(request)
    try {
      if (!request) {
        return BAD_REQUEST_RESPONSE
      }
      const dataResponse = await app.context.api.repository.searchTrackApi(request);
      return SUCCESSFULL_RESPONSE(dataResponse)
    } catch (e) {
      return INTERNAL_SERVER_ERROR(e)
    }
  }

  async function addToFavorite(request) {
    try {
      let dataResponse = await app.context.api.repository.addToFavorite(request);
      console.log(dataResponse)
      let result = {
        data: dataResponse,
        code: 200,
        message: 'Banda agregada con exito'
      }
      return result

    } catch (e) {
      result = {
        error: e,
        message: "error al agregar banda",
        code: 402
      }
      return result
    }
  }


  app.context.api.yapo = {
    searchTrack,
    addToFavorite
  };
};
