import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarrelloComponent } from './components/carrello/carrello.component';
import { HomeComponent } from './components/home/home.component';
import { DettagliComponent } from './components/dettagli/dettagli.component';

const routes: Route[] = [
  {
      path: '',
      component: HomeComponent
  },
  {
      path: 'carrello',
      component: CarrelloComponent
  },
  {
    path: 'dettagli/:id',
    component: DettagliComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarrelloComponent,
    HomeComponent,
    DettagliComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
