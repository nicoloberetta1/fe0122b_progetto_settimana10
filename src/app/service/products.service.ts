import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Products } from '../models/product';
import { Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  baseUrl = 'http://localhost:4201';
  elements:Products[] = []
  counter = new Subject <number>();


  //Per chiamare la lista prodotti: `${this.baseUrl}/products`
  //Per chiamare un prodotto in dettaglio: `${this.baseUrl}/products/${id}`

  constructor(private http: HttpClient) { }
  getProducts() {
    return this.http.get<Products[]>(`${this.baseUrl}/products`).pipe(catchError(err => {
       return throwError(this.messaggiErrore(err.status));
    }))
 }
 getProduct(id:number) {
  return this.http.get<Products>(`${this.baseUrl}/products/${id}`).pipe(catchError(err => {
     return throwError(this.messaggiErrore(err.status));
  }))
}
aggiungiAlCarrello(articolo: Products){
  this.elements.push(articolo);
  console.log(this.elements)
  this.counter.next(this.elements.length)}
contatore(){

}


 private messaggiErrore(stato: number) {
  let messaggio = '';
  switch (stato) {
    case 400:
      messaggio = 'richiesta errata';
      break;
      case 404:
        messaggio = 'Risorsa non trovata';
        break;
        default:
          messaggio = 'Qualcosa non va';
          break;
  }
  return messaggio;
}
}

