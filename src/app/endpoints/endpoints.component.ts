import { Component, OnInit } from '@angular/core';
import { Endpoint } from '../models/endpoint';
import { EndpointService } from '../services/endpoint.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-endpoints',
  templateUrl: './endpoints.component.html',
  styleUrls: ['./endpoints.component.scss']
})
export class EndpointsComponent implements OnInit {

  endpoints: Endpoint[] = [];

  constructor(private endpointService: EndpointService, private router: Router) { 
    this.endpointService.getAllEndpoints().subscribe(endpoints=>{
      this.endpoints = endpoints;
    });
  }

  add() {
    this.router.navigate(['/add-endpoint']);
  }

  ngOnInit(): void {
  }

}
