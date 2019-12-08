import { Route, Router, ActivatedRoute} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { User } from '../shared/user.model';
import { FormsModule, NgForm } from '@angular/forms';
import { NavService } from '../services/nav.service';

@Component({
  selector: 'app-loginUser',
  templateUrl: './login_User.component.html',
  styleUrls: ['./login_User.component.css']
})
export class LoginUserComponent implements OnInit {

  newsignup: boolean = false;
  user = new User();
  constructor(private service: HttpService,
              private route: ActivatedRoute,
              private router: Router,
              private nav:NavService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(
      (data) => {
        if(data["newsignup"] == "yes"){
          this.newsignup = true
        }
      }
    );
  }

  onSubmit(form: NgForm){
    this.user.Email_id = form.value["emailid"];
    this.user.Password = form.value["password"];
    this.service.loginUser(this.user).subscribe(
      (data) => {
        if(data!=null){
          
          this.newsignup = false;
          this.nav.logged = true;
          this.router.navigate(['/homeUser']);
        }
      }
    );
  }
}