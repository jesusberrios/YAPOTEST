module.exports = {
  searchTrack: async({response, request, api}) => {
    if(response.body){
      return 
    }else{
      const result = await api.yapo.searchTrack(request.header.name);
      response.code = result.code;
      response.type = 'application/json';
      response.body = result;
      console.log('hola 1')
    }
    
  },
  addToFavorite: async({response, request, api }) => {
    console.log('Data controller',request)
    const result = await api.yapo.addToFavorite(request.body);
    response.code = result.code;
    response.type = 'application/json';
    response.body = result;
  }
};
