import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Books } from 'src/app/common/books';
import { BooksservicesService } from 'src/app/services/booksservices.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books:Books[];

  constructor(private booksevice:BooksservicesService, private route:Router, private activtedrouter:ActivatedRoute) { }

  ngOnInit(): void {

    this.viewBook();
  }
  viewBook(){
    return this.booksevice.getbookList().subscribe(data=>{
      console.log(data)
      this.books=data
    })
  }
  update(book:Books){
   console.log(book);
   this.booksevice.book=book;
   this.route.navigateByUrl("bookform");
  }
  delete(id:number){
    this.booksevice.deleteBook(id).subscribe(data=>{
      console.log(data);
    })
  }
}
