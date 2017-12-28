import { ProductFilterPipe } from './../../shared/product-filter.pipe';
import { ProductListModel } from './../../app.model';
import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../../services/product-service.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productListArr: ProductListModel[] = [];
  prodList: ProductListModel;
  sampleL: any[];
  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  filter: ProductFilterPipe = new ProductFilterPipe();
  constructor(private service: ProductServiceService) {
    this.prodList = new ProductListModel();
   }

  ngOnInit() {
    console.log(this.filter);
    this.service.finalDO.subscribe(
      data => {
        this.isLoading$.next(true);
        this.productListArr.length = 0;
        if (data.hasOwnProperty('findItemsByKeywordsResponse')) {
          this.sampleL = data.findItemsByKeywordsResponse[0].searchResult[0].item;
          this.sampleL.forEach((ele, ind) => {
            this.prodList = new ProductListModel();
            this.prodList.productId = +ele.itemId;
            this.prodList.categoryId = +ele.primaryCategory[0].categoryId[0];
            this.prodList.categoryName = ele.primaryCategory[0].categoryName[0];
            this.prodList.imageUrl = ele.galleryURL;
            this.prodList.name = ele.title[0];
            this.prodList.itemUrl = ele.viewItemURL;
            this.prodList.price = Math.round(+ele.sellingStatus[0].currentPrice[0].__value__ * 100);
            this.productListArr.push(this.prodList);
          }, 
        );
           // console.log(this.productListArr);
        }
        this.isLoading$.next(false);
      },
      error => {},
      () => {console.log('sddhj')});
  }

}
