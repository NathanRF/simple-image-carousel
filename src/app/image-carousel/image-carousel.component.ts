import { Component } from '@angular/core';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.css'],
})
export class ImageCarouselComponent {
  //https://picsum.photos/v2/list
  private readonly images: URL[] = [
    new URL('https://picsum.photos/seed/1/200'),
    new URL('https://picsum.photos/seed/2/200'),
    new URL('https://picsum.photos/seed/3/200'),
    new URL('https://picsum.photos/seed/4/200'),
    new URL('https://picsum.photos/seed/5/200'),
    new URL('https://picsum.photos/seed/6/200'),
  ];

  private currentImageIndex = 0;

  CurrentImage() {return this.images[this.currentImageIndex];}

  NextImage(){
    this.currentImageIndex = (this.currentImageIndex === this.images.length - 1 ? 0 : this.currentImageIndex + 1)
  }
  PreviousImage(){
    this.currentImageIndex = (this.currentImageIndex === 0 ? this.images.length - 1 : this.currentImageIndex - 1)
  }
}
