import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { Products } from '../../models/product';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.scss']
})
export class CarrelloComponent implements OnInit {

  products: Products[] | undefined;

  constructor(private service: ProductsService) { }

  ngOnInit(): void {

    this.products = this.service.elements

  }

  submit(form: NgForm){
    console.log(form.value);
    form.reset()
    alert('Ordine effettuato correttamente')

  }

}
