import { NgForm } from '@angular/forms';
import { Donation } from './../shared/donation.model';
import { Router } from '@angular/router';
import { HttpService } from './../services/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acceptrequest',
  templateUrl: './acceptrequest.component.html',
  styleUrls: ['./acceptrequest.component.css']
})
export class AcceptrequestComponent implements OnInit {

  exist = true;
  donations:Donation;
  constructor(private service: HttpService,
    private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm)
  {
    this.donations.Number_of_items_Donated =form.value["quantity"];
   
    this.service.acceptRequest(this.donations).subscribe(
      (data) => {
        if(data == "impossible"){
          this.exist = true;
          console.log(data);
        }
        else{
          this.exist = false;
          this.router.navigate(['/homeUser']);
        }
      }
    );
  }
}
