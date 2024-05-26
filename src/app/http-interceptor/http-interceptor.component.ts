import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-http-interceptor',
  templateUrl: './http-interceptor.component.html',
  styleUrls: ['./http-interceptor.component.css']
})
export class HttpInterceptorComponent implements OnInit {

  constructor(private userSevice:UserService) { }
  result:any;
  ngOnInit(): void {
    this.userSevice.getALLUser().subscribe((res)=>
    {
      this.result=res;
    })
  }



}
