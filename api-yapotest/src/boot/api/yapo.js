const { BAD_REQUEST_RESPONSE, SUCCESSFULL_RESPONSE, INTERNAL_SERVER_ERROR, FAVORITE_NOT_FOUND_RESPONSE, FAVORITE_SUCCESSFULL_RESPONSE} = require('../domain/reponses')

module.exports = app => {
  app.context.api.yapo = {};

  async function searchTrack(request) {
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
      const dataResponse = await app.context.api.repository.addToFavorite(request);
      if(dataResponse.length){
        return FAVORITE_SUCCESSFULL_RESPONSE(dataResponse)
      }
      
      return FAVORITE_NOT_FOUND_RESPONSE

    } catch (e) {
      return INTERNAL_SERVER_ERROR(e)
    }
  }


  app.context.api.yapo = {
    searchTrack,
    addToFavorite
  };
};
