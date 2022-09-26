import { Component } from '@angular/core';
import {TracksService} from '../app/services/apple.service'
import {TrackList} from '../app/models/table.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-YapoTest';
  public bandArray: Array<TrackList> = []

  constructor(private tracksService: TracksService){

  }
  
  searchTracks(artistName: string){
    this.tracksService.getTracks(artistName).subscribe((e) => {
      this.bandArray = e.data.canciones.map((track, index) => ({ID: index + 1, ...track}))
    })
  }

}
