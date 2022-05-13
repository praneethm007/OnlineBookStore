import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bookuser } from 'src/app/common/bookuser';
import { BooksservicesService } from 'src/app/services/booksservices.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  userName: string = "";
  Password: string = "";
  user: Bookuser[];
  constructor(private bookservice: BooksservicesService, private route: Router, privateactivatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.userName + " " + this.Password);
    this.bookservice.checkUser(this.userName, this.Password).subscribe(data => {
      console.log(data)
      if (data.length > 0) {
        this.user = data;
        console.log(this.user);
        if (this.user[0].bbuserName == "admin") {
          this.route.navigateByUrl("adminpage")
        } else {
          this.bookservice.login = true;
          this.bookservice.loginId = this.user[0].bbuserId;
          this.route.navigateByUrl("/userpage/" + this.user[0].bbuserId);

        }

      }
      else {
        this.userName = "";
        this.Password = "";
        confirm("invalid User/If Not Register");
      }

    })
  }
}
