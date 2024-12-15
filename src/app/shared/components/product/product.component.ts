import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../../models/product';
import { productArr } from '../const/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  productsData : Array<Iproduct> = productArr;

  constructor() { }
  isShow : boolean = true;
  ngOnInit(): void {
    
  }
}