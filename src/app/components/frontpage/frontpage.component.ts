import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css']
})
export class FrontpageComponent implements OnInit {

  constructor(private route:Router,) { }

  ngOnInit(): void {
  }
  loginForm(){
    this.route.navigateByUrl("loginform");
  }
  register(){
    this.route.navigateByUrl("userform")
  }
}
