import { Component, OnInit } from '@angular/core';
import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  ngOnInit(): void {
    const scrollRevealOption: ScrollReveal.ScrollRevealObjectOptions = {
      distance: "50px",
      origin: "bottom",
      duration: 1000,
    };

    // header container
    ScrollReveal().reveal(".headerContainer h1", scrollRevealOption);

    ScrollReveal().reveal(".headerContainer h4", {
      ...scrollRevealOption,
      delay: 500,
    });

    ScrollReveal().reveal(".headerContainer .headerBtn", {
      ...scrollRevealOption,
      delay: 1000,
    });
  
  
  }
}
