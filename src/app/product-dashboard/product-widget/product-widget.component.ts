import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-product-widget',
  templateUrl: './product-widget.component.html',
  styleUrls: ['./product-widget.component.css']
})
export class ProductWidgetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  
  @Input() products:any;

}
