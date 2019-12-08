import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeUserComponent } from './home_User/home_User.component';
import { LoginUserComponent } from './login_User/login_User.component';
import { RegisterUserComponent } from './register_User/register_User.component';
import { HttpService } from './services/http.service';
import { from } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';
import { LogoutComponent } from './logout/logout.component';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShowRequestComponent } from './show-request/show-request.component';
import { AcceptrequestComponent } from './acceptrequest/acceptrequest.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeUserComponent,
    LoginUserComponent,
    RegisterUserComponent,
    LogoutComponent,
    ShowRequestComponent,
    AcceptrequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CarouselModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([])
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
