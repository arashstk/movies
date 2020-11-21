import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Trends } from '../interfaces/Trends';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  trending: Trends[];
  loading: boolean = true;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Trends>("https://api.themoviedb.org/3/trending/all/week?api_key=8983d1008e584406bd694232e94b9864").subscribe(result => {
      // console.log(result);
      this.trending = result.results;
      this.loading = false;
      console.log(this.trending);
    });
  }

}
