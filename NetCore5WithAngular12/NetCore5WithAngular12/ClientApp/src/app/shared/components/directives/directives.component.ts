import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  viewMode: string = "list";

  students = [
    { id: 1, name: "studen 1" },
    { id: 2, name: "studen 2" },
    { id: 3, name: "studen 3" },
    { id: 4, name: "studen 4" },
    { id: 5, name: "studen 5" },
  ];

  courses: any;
  courses2: any;

  constructor() { }

  ngOnInit(): void {
  }

  onAdd() {
    this.students.push({id: 6, name: "new student added"});
  }
  onRemove(student: any) {
    let index = this.students.indexOf(student);
    this.students.splice(index);
  }

  loadCourses() {
    this.courses = [
      { id: 1, name : " course 1 " },
      { id: 2, name : " course 2 " },
      { id: 3, name : " course 3 " },
      { id: 4, name : " course 4 " },
      { id: 5, name : " course 5 " }
    ];
  }

  loadCourses2() {
    this.courses2 = [
      { id: 11, name : " course 11 " },
      { id: 12, name : " course 12 " },
      { id: 13, name : " course 13 " },
      { id: 14, name : " course 14 " },
      { id: 15, name : " course 15 " }
    ];
   }

  trackCourse(index: any, course: any) {
    return course ? course.id : undefined;
  }

}
