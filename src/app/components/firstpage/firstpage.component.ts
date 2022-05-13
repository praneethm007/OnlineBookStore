import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksservicesService } from 'src/app/services/booksservices.service';

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.css']
})
export class FirstpageComponent implements OnInit {
  name: string = "";

  constructor(private route: Router, private activaeRoute: ActivatedRoute, private bookservice:BooksservicesService) { }

  ngOnInit(): void {    
    if(this.bookservice.login){
      this.route.navigateByUrl("/userpage/"+this.bookservice.loginId);
    }
    console.log(this.bookservice.login);
  }

  login() {
    this.route.navigateByUrl("loginpage");
  }
 
}
