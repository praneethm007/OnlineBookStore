import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchName:String="";
  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  search(){
    this.route.navigateByUrl("/searchName/"+this.searchName);
  }
}
