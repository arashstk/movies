import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Trends} from "../interfaces/Trends";
import {Movie} from "../interfaces/Movie";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private route: ActivatedRoute, private http: HttpClient) { }
  movie: Movie;
  loading: boolean = true;
  ngOnInit(): void {
    console.log(this.route.snapshot.params.id);
    let id: number = this.route.snapshot.params.id;
    this.http.get<Movie>("https://api.themoviedb.org/3/movie/" + id + "?api_key=8983d1008e584406bd694232e94b9864").subscribe(result => {
      // console.log(result);
      this.movie = result;
      this.loading = false;
      console.log(this.movie);
    });
  }

}
