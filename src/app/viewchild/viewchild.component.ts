import { Component, ElementRef, OnInit, ViewChild ,AfterViewInit, ViewChildren,QueryList} from '@angular/core';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css']
})

export class ViewchildComponent implements OnInit,AfterViewInit {

  // @ViewChild("highlight")

  // marker?:ElementRef

  @ViewChildren("highlight")

  marker?:QueryList<any>


  @ViewChild("box")

  value?:ElementRef

  ans:any;

  @ViewChild ('childView')child?:CounterComponent

  constructor() {

    // console.log(this.marker);
  }
  // when ever we are using the DOM its return the first matching elements in the dom
  ngAfterViewInit(): void {
    // This will correctly log the marker element after the view has initialized......
    // console.log(this.marker);
    if(this.marker)
    {
      console.log(this.marker.length);
      console.log(this.marker);
      this.marker.first.nativeElement.style.color="red";
      this.marker.last.nativeElement.style.color="green";
      // this.marker.nativeElement.style.color='blue';
      // console.log(this.marker.nativeElement);
      // console.log(this.marker.nativeElement.innerHTML);
      // console.log(this.marker.nativeElement.textContent);
    }
    // if(this.value)
    //   {
    //     this.ans=this.value.nativeElement.value;
    //     // console.log(this.value.nativeElement.value);
    //   }
  }

  ngOnInit(): void {
  }

  updateValue(): void {
    if (this.value) {
      this.ans = this.value.nativeElement.value;
    }
  }

  inc()
  {
    if(this.child)
      {
        this.child.increment();
      }
  }
  dec()
  {
    if(this.child)
    {
      this.child.decrement();
    }
  }

}
