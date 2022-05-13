import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Books } from 'src/app/common/books';
import { Bookuser } from 'src/app/common/bookuser';
import { BooksservicesService } from 'src/app/services/booksservices.service';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {
  user:Bookuser=new Bookuser(0,"","","","","","");

  constructor(private bookservice:BooksservicesService, private route:Router,private activeroute:ActivatedRoute) { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.user);
    this.bookservice.saveuser(this.user).subscribe(data=>{
      console.log(data);
    });
    this.route.navigateByUrl("");
  }
}
