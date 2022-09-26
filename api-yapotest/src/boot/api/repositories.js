const axios = require('axios');
const { buildTracksData, buildArtistData } = require('../domain/tracks')

module.exports = app => {

  app.context.api.repository = {};

  const searchTrackApi = async (band) => {
    try {
      const apiResponse = await axios.get('https://itunes.apple.com/search?term=' + band)
      const tracksData = apiResponse.data.results.filter(e => e.wrapperType == 'track').map(buildTracksData).slice(0, 25)
      return buildArtistData(tracksData)
    } catch (error) {
      return error
    }

  }

  const addToFavorite = async (data) => {
    
  }

  app.context.api.repository = {
    searchTrackApi,
    addToFavorite
  };
};
