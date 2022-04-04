import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/service/products.service';
import { Products } from 'src/app/models/product';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dettagli',
  templateUrl: './dettagli.component.html',
  styleUrls: ['./dettagli.component.scss']
})
export class DettagliComponent implements OnInit {

  product: Products | undefined;

  constructor(private service: ProductsService,  private router: ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.router.snapshot.paramMap.get('id'));
    this.service.getProduct(id).subscribe((result) => {
      this.product = result;
      console.log(this.product)
    }, (err) => {
      alert(err);
    })
  }

  aggiungi(prodotto:Products){
     this.service.contatore()
     this.service.aggiungiAlCarrello(prodotto)
  }
}
