import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Action } from 'rxjs/internal/scheduler/Action';
import { BooksservicesService } from 'src/app/services/booksservices.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor(private bookservice:BooksservicesService,private route:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }
login(){
  this.bookservice.login=false;
  this.bookservice.loginId=0;
  
  this.route.navigateByUrl("");
  alert("your are loged Out")
}
}
