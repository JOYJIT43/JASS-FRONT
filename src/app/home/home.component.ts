import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  images = ["./assets/images/img1.jpg","./assets/images/img2.jpg" ,"./assets/images/img3.jpg","./assets/images/img4.jpg","./assets/images/img5.jpg","./assets/images/img6.jpg","./assets/images/img7.jpg","./assets/images/img8.jpg"];
}
