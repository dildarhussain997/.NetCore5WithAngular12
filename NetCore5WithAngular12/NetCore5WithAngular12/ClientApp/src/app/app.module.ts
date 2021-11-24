import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CourseComponent } from './course/course.component';
import { TestComponent } from './test/test.component';
import { SummaryPipe } from './pipes/summary.pipe';

@NgModule({
  declarations: [
    CourseComponent,
    TestComponent,
    SummaryPipe
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }