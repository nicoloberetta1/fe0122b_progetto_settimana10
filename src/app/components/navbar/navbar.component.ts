import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  contatore: number = 0

  constructor(private service: ProductsService) { }

  ngOnInit(): void {
    //this.conteggio = this.service.conteggio
    this.service.counter.subscribe((x)=>{
      this.contatore = x
    })
  }

}
