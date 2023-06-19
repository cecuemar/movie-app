import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-list-movie',
    templateUrl: './listmovie.component.html',
    styleUrls: ['./listmovie.component.css']
})

export class listMovieComponent{
    movieList: any; 
    searchInput: string = '';
    showDetail: boolean = false;

    constructor(private router: Router) { }

    onSubmit(){
        this.searchMovie(this.searchInput);
    
    }

    searchMovie(movieName: string){
        fetch('https://www.omdbapi.com/?s='+ (movieName) +'&apikey=b4b60d19')
        .then(response => response.json())
          .then(data => {
            if(data.Response == "True"){
              this.movieList = data.Search;
            } else {
              this.movieList = [];
              alert(404 + " Not Found, Please Try Again");
            }
        }).catch(err => {
          console.log(err);
        });
      }
      getDetail(imdbID: string){
        
        this.router.navigate(['/detail', imdbID]);
      }
}