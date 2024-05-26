import { Component, OnInit,Input, ContentChild, ElementRef, AfterContentInit, ContentChildren ,QueryList} from '@angular/core';

@Component({
  selector: 'app-product-widget',
  templateUrl: './product-widget.component.html',
  styleUrls: ['./product-widget.component.css']
})

export class ProductWidgetComponent implements OnInit, AfterContentInit{
  
  constructor() { }

  @Input() products:any;

  // @ContentChild("head") contentHeader?:ElementRef

  @ContentChildren("head") contentHeader?:QueryList<any>

  ngOnInit(): void {

  }
  ngAfterContentInit(): void {
    console.log("hello");
    console.log(this.contentHeader);

    // if(this.contentHeader)
    //   {
    //     this.contentHeader.nativeElement.setAttribute('style','color:red');
    //   }

  }
}
