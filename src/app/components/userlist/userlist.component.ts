import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bookuser } from 'src/app/common/bookuser';
import { BooksservicesService } from 'src/app/services/booksservices.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  user: Bookuser[] = [];

  constructor(private bookservice: BooksservicesService, private route: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllUsers();
  }
  getAllUsers() {
    this.bookservice.getUserList().subscribe(data => {
      this.user = data;
    })
  }

}
