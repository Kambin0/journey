import { Component, OnInit } from '@angular/core';
import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})
export class DiscoverComponent implements OnInit {

  ngOnInit(): void {
    const scrollRevealOption: ScrollReveal.ScrollRevealObjectOptions = {
      distance: "50px",
      origin: "bottom",
      duration: 1000,
    };

    // discover container
    ScrollReveal().reveal(".discoverCard", {
      ...scrollRevealOption,
      interval: 500,
    });

    ScrollReveal().reveal(".discoverCardContent", {
      ...scrollRevealOption,
      interval: 500,
      delay: 200,
    });
  }
}
