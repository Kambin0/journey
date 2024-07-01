import { Component, OnInit } from '@angular/core';
import { DestinationService } from './destination.service';
import { Destination } from './destination';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit {
  destinations: Destination[] = [];
  destination: any;

  constructor(private destinationService: DestinationService) { }

  ngOnInit() {
    this.getDestinations();

    const scrollRevealOption: ScrollReveal.ScrollRevealObjectOptions = {
      distance: "50px",
      origin: "bottom",
      duration: 1000,
    };

    ScrollReveal().reveal(".headerContainer h1", scrollRevealOption);
    ScrollReveal().reveal(".headerContainer h4", {
      ...scrollRevealOption,
      delay: 500,
    });

    ScrollReveal().reveal(".headerContainer .headerBtn", {
      ...scrollRevealOption,
      delay: 1000,
    });

    ScrollReveal().reveal(".sectionContainer h2", scrollRevealOption);
    ScrollReveal().reveal(".sectionContainer table", {
      ...scrollRevealOption,
      delay: 500,
    });
  }

  public getDestinations(): void {
    this.destinationService.getDestinations().subscribe(
      (response: Destination[]) => {
        this.destinations = response;
        console.log(this.destinations);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
