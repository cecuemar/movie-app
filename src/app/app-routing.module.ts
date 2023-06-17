import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { detailComponent } from './components/detailmovie.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'detail/:filmID', component: detailComponent}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
