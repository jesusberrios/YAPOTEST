import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {TracksService} from '../../services/apple.service'


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})


export class InputComponent implements OnInit {
  public artistName: string = ""
  @Output() artistNameOnSearch = new EventEmitter<string>();

  constructor(private tracksService: TracksService) { }

  ngOnInit(): void {
  }

  search(artistName: string){
   this.artistNameOnSearch.emit(artistName)
  }

}
