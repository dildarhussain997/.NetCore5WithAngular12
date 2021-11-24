import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  getTextFromService(): string {
    return "text from course service";
  }
}
