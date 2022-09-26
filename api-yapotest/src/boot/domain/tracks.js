
const buildTracksData = (rawTrackData) => {
    return {
        cancion_id: rawTrackData.trackId,
        nombre_cancion: rawTrackData.trackName,
        nombre_album: rawTrackData.collectionName,
        url_preview: rawTrackData.previewUrl,
        fecha_de_lanzamiento: rawTrackData.releaseDate,
        precio: {
            valor: rawTrackData.collectionPrice,
            tipo_moneda: rawTrackData.currency
        },
    }
}
const buildArtistData = (trackList) => {
    const albumes = trackList.reduce((albums, currTrack) => {
       if(!albums.includes(currTrack.nombre_album)){
        albums.push(currTrack.nombre_album)
       }
       return albums
    },[])
    return {
        total_albumes: albumes.length,
        total_canciones: trackList.length,
        albumes,
        canciones: trackList
    }
}
module.exports = ({
    buildTracksData,
    buildArtistData
})