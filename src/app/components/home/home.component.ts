import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/product';
import { ProductsService } from 'src/app/service/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: Products[] | undefined;


  constructor(private service: ProductsService, private router: Router) { }

  ngOnInit(): void {
    this.service.getProducts().subscribe((result) => {
      this.products = result;
    }, (err) => {
      alert(err);
    })

  }

  dettagli(id:number) {
    this.router.navigate([`/dettagli/${id}`]);
}

}

