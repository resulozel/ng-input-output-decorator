import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {PostDetailComponent} from "./components/post-detail/post-detail.component";

const routes : Routes = [
  {
    path: '',
    component : PostDetailComponent,
    pathMatch: 'full',
  },

];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }
