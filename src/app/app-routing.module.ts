import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EndpointsComponent } from './endpoints/endpoints.component';
import { AddEndpointComponent } from './add-endpoint/add-endpoint.component';


const routes: Routes = [
  { path: 'endpoints', component: EndpointsComponent },
  { path: 'add-endpoint', component: AddEndpointComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
