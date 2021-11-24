import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  titleMain: string = "Title of page ";
  isFill: boolean | undefined = true;


  objcourse = {
    title: "Title of object",
    rating: 4339.6787282,
    students: 21312183729,
    price: 223362.32628,
    date: new Date(2019, 8, 24)
  }

  longtext: string = "Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.The point of using Lorem Ipsum is that it has a more - or - less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.Various versions have evolved over the years, sometimes by accident, sometimes on purpose(injected humour and the like.";


  constructor() { }

  ngOnInit(): void {
  }

}
