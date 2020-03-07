import { Component, OnInit } from '@angular/core';
import { Endpoint } from '../models/endpoint';
import { EndpointService } from '../services/endpoint.service';

@Component({
  selector: 'app-endpoints',
  templateUrl: './endpoints.component.html',
  styleUrls: ['./endpoints.component.scss']
})
export class EndpointsComponent implements OnInit {

  endpoints: Endpoint[] = [];

  constructor(private endpointService: EndpointService) { 
    this.endpointService.getAllEndpoints().subscribe(endpoints=>{
      console.log(endpoints);
    });
  }

  ngOnInit(): void {
  }

}
