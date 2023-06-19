import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

 import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header-movie/header.component';
import { listMovieComponent } from './components/list-movie/listmovie.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    listMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
