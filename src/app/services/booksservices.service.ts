import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { BookCategory } from '../common/book-category';
import { Books } from '../common/books';
import { Bookuser } from '../common/bookuser';
import { Cart } from '../common/cart';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class BooksservicesService {
  login:boolean =false;
  loginId:number=0;

  book: Books = new Books(0, "bookname", "bookDescription", 0, null, 0, 0, new Date, new Date, 1);


  bookcatgUrl = "http://localhost:8080/bookbuy/bookcategory";
  bookurl = "http://localhost:8080/bookbuy/books";
  bookuserurl = "http://localhost:8080/bookbuy/bookbuyuser";
  bookSearch = "http://localhost:8080/bookbuy/books/search/findByBookId?id=";
  carturl="http://localhost:8080/bookbuy/cart";
  constructor(private httpClient: HttpClient) { }

  getCategoryList(): Observable<BookCategory[]> {
    return this.httpClient.get<GetBookCategoryResponse>(this.bookcatgUrl).
      pipe(map(response => response._embedded.bookCategories
      ));
  }

  saveBook(book: Books): Observable<Books> {
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': 'auth-token',
        'Access-control-allow-origin': '*'
      })
    };
    return this.httpClient.post<Books>(this.bookurl, book, httpOptions);
  }

  getbookList(): Observable<Books[]> {
    return this.httpClient.get<GetBookList>(this.bookurl).pipe(map(response => response._embedded.books));
  }

  saveuser(user: Bookuser): Observable<Books> {
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': 'auth-token',
        'Access-control-allow-origin': '*'
      })
    };
    return this.httpClient.post<Books>(this.bookuserurl, user, httpOptions);
  }
  checkUser(username: string, password: string) {
    const userurl = "http://localhost:8080/bookbuy/bookbuyuser/search/findByBbuserNameAndBbuserPassword?username=" + username + "&password=" + password;
    return this.httpClient.get<UserResponse>(userurl).pipe(map(response => response._embedded.bookBuyUsers));
  }
  deleteBook(id: number): Observable<Books> {
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': 'auth-token',
        'Access-control-allow-origin': '*'
      })
    };
    return this.httpClient.delete<Books>(this.bookurl + `/${id}`, httpOptions);
  }
  getUserList(): Observable<Bookuser[]> {
    return this.httpClient.get<GetUserList>(this.bookuserurl).pipe(map(response => response._embedded.bookBuyUsers));
  }
  getBookByCatId(id: number): Observable<Books[]> {
    const bookIdUrl = "http://localhost:8080/bookbuy/books/search/findByBookCategoryId?id=" + id;
    return this.httpClient.get<GetBookList>(bookIdUrl).
      pipe(map(response => response._embedded.books
      ));
  }
  getBookById(id: number): Observable<Books[]> {
    const bookIdUrl = "http://localhost:8080/bookbuy/books/search/findByBookId?id=" + id;
    return this.httpClient.get<GetBookList>(bookIdUrl).
      pipe(map(response => response._embedded.books
      ));
  }
  getBookByName(name: string): Observable<Books[]> {
    const booknameUrl = "http://localhost:8080/bookbuy/books/search/findByBookName?name=" + name;
    return this.httpClient.get<GetBookList>(booknameUrl).pipe(map(response => response._embedded.books));
  }
  addToCart(cart:Cart):Observable<Cart>{
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': 'auth-token',
        'Access-control-allow-origin': '*'
      })
    };
    return this.httpClient.post<Cart>(this.carturl, cart, httpOptions);

  }
  viewCart(id:number):Observable<Cart[]>{
    const cartUserId ="http://localhost:8080/bookbuy/cart/search/findByUserId?id="+id;
    return this.httpClient.get<CartList>(cartUserId).pipe(map(response=>response._embedded.carts));

  }


}
interface GetBookCategoryResponse {
  _embedded: {
    bookCategories: BookCategory[]
  }
}
interface GetBookList {
  _embedded: {
    books: Books[]
  }
}
interface UserResponse {
  _embedded: {
    bookBuyUsers: Bookuser[]
  }
}
interface GetUserList {
  _embedded: {
    bookBuyUsers: Bookuser[]
  }
}
interface CartList{
  _embedded: {
    carts: Cart[]
  }
}

