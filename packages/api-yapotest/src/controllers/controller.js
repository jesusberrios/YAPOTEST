module.exports = {
  searchTrack: async({response, request, api}) => {
    if(response.body){
      return 
    }else{
      const result = await api.yapo.searchTrack(request.header.name);
      response.code = result.code;
      response.type = 'application/json';
      response.body = result;
    }
    
  },
  addToFavorite: async({response, request, api }) => {
    const result = await api.yapo.addToFavorite(request.body);
    response.code = result.code;
    response.type = 'application/json';
    response.body = result;
  }
};
