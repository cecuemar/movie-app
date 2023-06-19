import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { detailComponent } from './components/detail-movie/detailmovie.component';
import { listMovieComponent } from './components/list-movie/listmovie.component';

const routes: Routes = [
  {path: '', component: listMovieComponent},
  {path: 'detail/:filmID', component: detailComponent}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
