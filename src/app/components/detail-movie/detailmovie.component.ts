import { Component } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';
@Component({
    selector: 'app-detail',
    templateUrl: './detailmovie.component.html',
    styleUrls: ['./detailmovie.component.css']
})

export class detailComponent{

  movie: any;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
        const imdbID :string = params['filmID']    
        this.detailMovie(imdbID);
    })
  }

  detailMovie(imdbID: string){
    fetch('https://www.omdbapi.com/?i='+ (imdbID) +'&apikey=b4b60d19')
    .then(response => response.json())
      .then(data => {
      this.movie = data
      console.log(this.movie.Title);
    }).catch(err => {
      console.log(err);
    });
  }
}