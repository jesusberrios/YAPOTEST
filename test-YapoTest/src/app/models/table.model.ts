import { Observable } from 'rxjs';

export interface TrackServiceResponse{
    data: ArtistDataResponse;
    code: number;
    message: string;
}
export interface TrackList {
    cancion_id: number;
    nombre_cancion: string;
    nombre_album: string;
    url_preview: string;
    fecha_lanzamiento: string;
    precio: {
        valor: string;
        tipo_moneda: string;
    };
}
export interface ArtistDataResponse{
    total_albumes: number;
    total_canciones: number;
    albumes: Array<string>;
    canciones: Array<TrackList>;
}




export interface TrackService {
    searchTracks(artistName: string): Observable<TrackServiceResponse>;
}