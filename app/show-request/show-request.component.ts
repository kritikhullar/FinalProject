import { NgForm } from '@angular/forms';
import { Totaldonation } from './../shared/totaldonation.model';
import { Donation } from './../shared/donation.model';
import { Router } from '@angular/router';
import { RequestsService } from './../services/requests.service';
import { Request } from './../shared/request.model';
import { HttpService } from './../services/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-request',
  templateUrl: './show-request.component.html',
  styleUrls: ['./show-request.component.css']
})
export class ShowRequestComponent implements OnInit {

  requests: Request[];
  donations: Donation[];
  totaldonations: Totaldonation[];
  constructor(private http: HttpService,
              private requestService: RequestsService,
              private router: Router) { }

  ngOnInit() {
    this.http.getRequests().subscribe(
      (data: Request[]) => {
        this.requests = data;
      }
    );

    this.http.getDonations().subscribe(
      (data: Totaldonation[]) => {
        this.totaldonations = data; 
      }
     );
  }
 
}


