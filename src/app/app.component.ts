import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movie-app';
  movieList: any; 
  searchInput: string = '';

constructor(private router: Router) { }

  onSubmit(){
    this.searchMovie(this.searchInput);
    
  }
  searchMovie(movieName: string){
    fetch('https://www.omdbapi.com/?s='+ (movieName) +'&apikey=b4b60d19')
    .then(response => response.json())
      .then(data => {
      this.movieList = data.Search;
    }).catch(err => {
      console.log(err);
    });
  }
  getDetail(imdbID: string){
    this.router.navigate(['/detail', imdbID]);
  }
}
