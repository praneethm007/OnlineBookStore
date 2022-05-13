import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Books } from 'src/app/common/books';
import { BooksservicesService } from 'src/app/services/booksservices.service';

@Component({
  selector: 'app-bookform',
  templateUrl: './bookform.component.html',
  styleUrls: ['./bookform.component.css']
})
export class BookformComponent implements OnInit {
  editable: boolean = false;
  
  constructor(private bookservice: BooksservicesService, private router: Router, private activatedRouter: ActivatedRoute) { }
  book = this.bookservice.book;
  ngOnInit(): void {
    // this.activatedRouter.paramMap.subscribe(() => { this.getBookById() });
  }
  // getBookById() {

  //   const bookId = +this.activatedRouter.snapshot.paramMap.get("id");
  //   console.log(bookId);
  //   if (bookId > 0) {
  //     this.editable = true;
  //     this.bookservice.getBookById(bookId).subscribe(data => {
  //       console.log(data);
  //       this.book = data
  //     });
  //   }
  // }

  onSubmit() {
      console.log(this.book);
      this.bookservice.saveBook(this.book).subscribe(data => {
        console.log(data);
      });
    this.router.navigateByUrl("");
  }

}
