import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes, RouterStateSnapshot} from '@angular/router';
import {AppComponent} from './app.component';
import {ShowComponent} from './show/show.component';
import {CreateComponent} from './create/create.component';
import {UpdateComponent} from './update/update.component';
import {DeleteComponent} from './delete/delete.component';
import { DetailsComponent } from './details/details.component';

const routes : Routes = [
  {
    path: "",
    component: ShowComponent
  }, {
    path: "show",
    component: ShowComponent
  }, {
    path: "create",
    component: CreateComponent
  }, {
  path: "details/:id",
  component: DetailsComponent
}, {
    path: "update/:id",
    component: UpdateComponent
  }, {
    path: "delete",
    component: DeleteComponent
  }
]

@NgModule({
  declarations: [
    AppComponent, ShowComponent, CreateComponent, UpdateComponent, DeleteComponent,
    DetailsComponent
],
  imports: [
    BrowserModule, HttpClientModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}