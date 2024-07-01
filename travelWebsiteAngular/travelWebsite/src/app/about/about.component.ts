import { Component, OnInit } from '@angular/core';
import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  ngOnInit(): void {
    const scrollRevealOption: ScrollReveal.ScrollRevealObjectOptions = {
      distance: "50px",
      origin: "bottom",
      duration: 1000,
    };

    // about container
    ScrollReveal().reveal(".aboutContainer .sectionSeader", scrollRevealOption);

    ScrollReveal().reveal(".aboutContainer .sectionSubheader", {
      ...scrollRevealOption,
      delay: 500,
    });

    ScrollReveal().reveal(".aboutContainer .aboutFlex", {
      ...scrollRevealOption,
      delay: 1000,
    });

    ScrollReveal().reveal(".aboutContainer .btn", {
      ...scrollRevealOption,
      delay: 1500,
    });
  }
}
