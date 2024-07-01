import { Component, OnInit } from '@angular/core';
import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit{

    ngOnInit(): void {
      const scrollRevealOption: ScrollReveal.ScrollRevealObjectOptions = {
        distance: "50px",
        origin: "bottom",
        duration: 1000,
      };
  
      ScrollReveal().reveal(".galleryCard", {
        ...scrollRevealOption,
        interval: 300,
      });

    }
  }
