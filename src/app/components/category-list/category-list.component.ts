import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookCategory } from 'src/app/common/book-category';
import { BooksservicesService } from 'src/app/services/booksservices.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  category: BookCategory[];
 
  constructor(private bookService: BooksservicesService, private route: Router, private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCategory();
  }
  getCategory() {
    return this.bookService.getCategoryList().subscribe(data => {
      console.log(data) 
      this.category = data });
  }
}
