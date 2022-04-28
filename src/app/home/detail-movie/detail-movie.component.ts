import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/_core/services/data.service';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.scss']
})
export class DetailMovieComponent implements OnInit {
  id: any
  detailMovie: any
  constructor(
    private dataService: DataService,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getParamFromUrl();
    this.getDetailMovie();
  }

  getParamFromUrl() {
    this.id = this.activateRoute.snapshot.paramMap.get('id');
  }

  getDetailMovie() {
    this.dataService.getDetailMovie(this.id).subscribe(data => {
      this.detailMovie = data
    })
  }
}
