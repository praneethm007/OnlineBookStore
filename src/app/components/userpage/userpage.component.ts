import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Books } from 'src/app/common/books';
import { Cart } from 'src/app/common/cart';
import { BooksservicesService } from 'src/app/services/booksservices.service';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {
  cart:Cart=new Cart(0,0,0);
  books: Books[];
  categoryId: number;
  bookname:string;

  constructor(private booksevice: BooksservicesService, private route: Router, private activtedrouter: ActivatedRoute) { }


  ngOnInit(): void {
    this.activtedrouter.paramMap.subscribe(()=>{
      this.viewBook()});

  }
  viewBook() {
    const hasCatId: boolean = this.activtedrouter.snapshot.paramMap.has("catId");
    const hassearchName: boolean = this.activtedrouter.snapshot.paramMap.has("bname");
    if (hasCatId) {
      this.categoryId = +this.activtedrouter.snapshot.paramMap.get("catId");
      this.booksevice.getBookByCatId(this.categoryId).subscribe(data => {
        console.log(data);
        this.books = data;
      })
    }
    else if(hassearchName){
      this.bookname = this.activtedrouter.snapshot.paramMap.get("bname");
      this.booksevice.getBookByName(this.bookname).subscribe(data => {
        console.log(data);
        this.books = data;
      });
    }
    else {
      this.booksevice.getbookList().subscribe(data => {
        console.log(data)
        this.books = data
      })
    }
  }
  addToCart(id:number){
    if(this.booksevice.login){
      this.cart.bookId=id;
      this.cart.userId=this.booksevice.loginId;
      console.log(this.cart);
      this.booksevice.addToCart(this.cart).subscribe(data=>{
        console.log(data);
        console.log("hai");
      })
    }else{
      alert("please login in");
    }
    
  }
}
