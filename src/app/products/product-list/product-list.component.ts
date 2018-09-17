import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Product} from '../product.interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  title = 'products';
  products: Product[];

  constructor(readonly service: ProductService) {
    this.products = service.getProducts();
  }

  ngOnInit() {
  }

}
