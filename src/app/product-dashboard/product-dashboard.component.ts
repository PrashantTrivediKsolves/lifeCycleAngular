import { Component, OnInit } from '@angular/core';

import { subscribeOn } from 'rxjs';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.css']
})

export class ProductDashboardComponent implements OnInit {

  public salesProduct=[
    {id:1,name:"prashant",price:"100"},
    {id:2,name:"surendra",price:"200"},
    {id:3,name:"Fashion",price:"5000"},
    {id:4,name:"Electronics",price:"3000"}
  ];

  public topProduct=[
    {id:1,name:"phone",price:"1000"},
    {id:2,name:"Laptop",price:"2000"},
    {id:3,name:"Decor",price:"3000"},
    {id:4,name:"Electronics",price:"4000"}
  ];
  
  constructor(){}
  ngOnInit(): void {

  }




}
