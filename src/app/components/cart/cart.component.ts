import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Books } from 'src/app/common/books';
import { Cart } from 'src/app/common/cart';
import { BooksservicesService } from 'src/app/services/booksservices.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  books: Books[]=[];
  cartId: number = 0;
  cart: Cart[] = [];

  constructor(private bookservice: BooksservicesService, private route: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.viewCart();

  }
  viewCart() {
    this.bookservice.viewCart(this.bookservice.loginId).subscribe(data => {
      console.log(data)
      this.cart = data;
      console.log(this.cart);

      this.cart.forEach(ca => {
        console.log(ca)
        this.bookservice.getBookById(ca.bookId).subscribe(data => {
          console.log(data);
          this.books.push(data[0])
          console.log(this.books);
        })

      });
    });


  }
  delete() {

  }
}
