import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import {AfterViewInit, Component, Input, OnChanges, SimpleChanges, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { TrackList } from 'src/app/models/table.model';


@Component({
  selector: 'app-table',
  styleUrls: ['table.component.scss'],
  templateUrl: 'table.component.html',
})
export class TableComponent implements AfterViewInit, OnChanges{
  displayedColumns: string[] = ['ID', 'Canción', 'Album', 'URL_Preview', 'Precio', 'Lanzamiento'];
  dataSource: MatTableDataSource<TrackList>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @Input() bandArray!: Array<TrackList>;
  
  constructor() {
    this.dataSource = new MatTableDataSource();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['bandArray']){
      this.dataSource = new MatTableDataSource(this.bandArray)
      this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
