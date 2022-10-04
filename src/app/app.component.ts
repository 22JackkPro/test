import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'index1';

  constructor(){ }

  ngOnInit(){ }

  url:string = "../assets/Image01-2.jpg";
  changeImage(event:any){
    this.url = event.target.src;
  
  }
}
