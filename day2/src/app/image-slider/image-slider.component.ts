import { Component } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent {
  i: number = 0;
  intervalId:any;
  images: string[] = [
    "https://images.unsplash.com/photo-1681284298793-492e48fcb9f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1889&q=80",
    "https://images.unsplash.com/photo-1681284298614-4a10f165bb37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
    "https://images.unsplash.com/photo-1681276974957-890cf1dcba67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
    "https://images.unsplash.com/photo-1680430631356-02d24afabc5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=80",
    "https://images.unsplash.com/photo-1680725779155-456faadefa26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",


  ]

  image = this.images[0];
  next() {
    if (this.i < this.images.length - 1) {
      this.i++;
      this.image = this.images[this.i];
    }
  }
  prev() {
    if (this.i >0) {
      this.i--;
      this.image = this.images[this.i];
    }
  }
  slide() {
    this.intervalId= setInterval(()=>{
      this.next();
    },2000)
  }
  stop(){
    clearInterval(this.intervalId);
  }
}
