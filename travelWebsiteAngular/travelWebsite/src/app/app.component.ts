import { DestinationService } from './destination/destination.service';
import { Component, OnInit } from '@angular/core';
import { Destination } from './destination/destination';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{ //implements OnInit {}
  title = 'travelWebsite';
  
}
