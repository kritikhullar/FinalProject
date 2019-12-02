import { Router } from '@angular/router';
import { HttpService } from './../services/http.service';
import { User } from './../shared/user.model';
import { FormsModule, NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 public imageUrl:string = "../assets/img/1.jpg";
  filetoupload : File = null;

  exist = true;
  user = new User();
  constructor(private service: HttpService,
              private router: Router) { }

  ngOnInit() {
  }

  handleFileInput(file:FileList){
    this.filetoupload = file.item(0);

    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.filetoupload);
  }

  onSubmit(form: NgForm)
  {
    this.user.Employee_Id = form.value["employeeid"];
    this.user.Employee_Name = form.value["fullname"];
    this.user.Mobile_number = form.value["phonenumber"];
    this.user.Email_id = form.value["email"];
    this.user.Password = form.value["password"];
    this.user.Date_Of_Birth = form.value["dob"];
    this.user.Employee_Photo = form.value["profilephoto"];
    this.service.createUser(this.user).subscribe(
      (data) => {
        if(data == "exist"){
          this.exist = true;
          console.log(data);
        }
        else{
          this.exist = false;
          this.router.navigate(['/login'], {queryParams: {newsignup: "yes"}});
        }
      }
    );
  }
}