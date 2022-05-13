import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SearchComponent } from './components/search/search.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookformComponent } from './components/bookform/bookform.component';
import { UserformComponent } from './components/userform/userform.component';
import { LoginformComponent } from './components/loginform/loginform.component';
import { UserpageComponent } from './components/userpage/userpage.component';
import { FirstpageComponent } from './components/firstpage/firstpage.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CartComponent } from './components/cart/cart.component';
import { FrontpageComponent } from './components/frontpage/frontpage.component';


const routes: Routes = [
  { path: "", component: FirstpageComponent },
  { path: "adminpage", component: WelcomeComponent },
  { path: "bookCat", component: CategoryListComponent },
  { path: "book", component: BookListComponent },
  { path: "bookform", component: BookformComponent },
  { path: "editbook/:id", component: BookformComponent },
  { path: "userform", component: UserformComponent },
  { path: "loginform", component: LoginformComponent },
  { path: "userpage/:id", component: CarouselComponent },
  { path: "loginpage", component: LoginpageComponent },
  { path: "userlist", component: UserlistComponent },
  { path: "carousel", component: CarouselComponent },
  { path: "search/:catId", component: FirstpageComponent },
  { path: "searchName/:bname", component: FirstpageComponent },
  { path: "cart", component: CartComponent },
  { path: "frontpage", component:FrontpageComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SearchComponent,
    CategoryListComponent,
    BookListComponent,
    BookformComponent,
    UserformComponent,
    LoginformComponent,
    UserpageComponent,
    FirstpageComponent,
    LoginpageComponent,
    UserlistComponent,
    CarouselComponent,
    CartComponent,
    FrontpageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
