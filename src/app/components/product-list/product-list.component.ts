import { Component, OnInit } from '@angular/core';
import { ProductListModel } from '../../app.model'
import { ProductServiceService } from '../../services/product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: ProductListModel[];
  constructor(private service: ProductServiceService) { }

  ngOnInit() {
    this.service.finalDO.subscribe(
      data => {
        console.log(data);
      }
    )
  }

}
