import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {MainComponent} from './main/main.component';
import {RouterModule, Routes} from "@angular/router";
import {DocsComponent} from './docs/docs.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'main', component: MainComponent},
  {path: 'docs', component: DocsComponent},
  {path: '', component: HomeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DocsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    [RouterModule.forRoot(routes)],
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
