import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  text1: string = "value from model"; // property value is set at initialize time 
  text2: string; // property value is set using a function when its called 
  text3: string; // property value is set using a function within constructor of component  
  text4: string; // property value is set using a service function called with in constructor of component
  imageurl: string = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"; //url of image to be shown
  colspan: number;
  isActive: boolean = true;

  textemail: string = "dildar@domain.com";
  textemail2: string = "dildar2@domain.com";


  constructor(courseService: CourseService) {
    // you can use below code to create instance of a service or you can use above dependency injection,
    // dependency injection method is loosly coupled and is prefered.
    //courseService: CourseService = new CourseService();
    this.text3 = this.gettexttoconstructor();
    this.text4 = courseService.getTextFromService();

    this.colspan = 2;
  }

  ngOnInit(): void {
  }


  gettext(): string {
    this.text2 = "text from model function ";
    return this.text2;
  }

  gettexttoconstructor(): string {
    return "text returned from function to construction, and property value is set in constructor";
  }

  onClick() {
    return console.log("button was clicked ");
  }

  onClick2() {
    return console.log("button was clicked onclick2 event was triggered");
  }

  onClickDiv2() {
    return console.log("onClickDiv2 event was triggered ");
  }

  onClickDiv1() {
    return console.log("onClickDiv1 event was triggered ");
  }




  onClick3($event: any) {
    $event.stopPropagation();
    return console.log("button was clicked onclick1 event was triggered", $event);
  }

  onClickDiv4() {
    return console.log("onClickDiv4 event was triggered ");
  }

  onClickDiv5() {
    return console.log("onClickDiv5 event was triggered ");
  }




  onEnter($event: any) {
    return console.log("Enter key was pressed", $event);
  }

  onSpace($event: any) {
    return console.log("Space key was pressed", $event);
  }


  onkeyEnter($event: any) {
    return console.log("value from textbox ", $event.target.value);
  }

  onkeyEnter2(testVariable: any) {
    return console.log("value from textbox ", testVariable);
  }

  onkeyEnter3() {
    return console.log("value from textbox ", this.textemail);
  }

  onkeyEnter4() {
    return console.log("value from textbox ", this.textemail2);
  }

}
