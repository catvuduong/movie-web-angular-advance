import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/_core/services/data.service';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss']
})
export class ListMoviesComponent implements OnInit {
  listMovies: any[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getListMovies();
  }
  getListMovies() {
    this.dataService.getListMovies().subscribe((data: any) => {
      this.listMovies = [...data];
    })
  }

}
