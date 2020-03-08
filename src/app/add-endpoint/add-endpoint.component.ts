import { Component, OnInit } from '@angular/core';
import { Endpoint } from '../models/endpoint';
import { EndpointService } from '../services/endpoint.service'; 

@Component({
  selector: 'app-add-endpoint',
  templateUrl: './add-endpoint.component.html',
  styleUrls: ['./add-endpoint.component.scss']
})
export class AddEndpointComponent implements OnInit {

  endpoint: Endpoint;

  constructor(private endpointService: EndpointService) { 
    this.endpoint = new Endpoint();
  }

  ngOnInit(): void {
  }

  addEndpoint(){
    this.endpointService.addEndpoint(this.endpoint).subscribe(endpoint=>{
      console.log(endpoint);
    });
  }
}
