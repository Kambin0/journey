import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent} from './header/header.component';
import { GalleryComponent } from './gallery/gallery.component'; 
import { DiscoverComponent } from './discover/discover.component'; 
import { AboutComponent } from './about/about.component';
import { DestinationComponent } from './destination/destination.component'; 
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { DestinationService } from './destination/destination.service';
import { HttpClientModule } from '@angular/common/http';
import { SmoothScrollDirective } from '../smooth-scroll.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GalleryComponent,
    DiscoverComponent,
    AboutComponent,
    DestinationComponent,
    HomeComponent,
    SmoothScrollDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DestinationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
