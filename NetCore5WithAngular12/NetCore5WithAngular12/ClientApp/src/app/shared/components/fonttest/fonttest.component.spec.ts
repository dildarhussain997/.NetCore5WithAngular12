import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FonttestComponent } from './fonttest.component';

describe('FonttestComponent', () => {
  let component: FonttestComponent;
  let fixture: ComponentFixture<FonttestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FonttestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FonttestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
