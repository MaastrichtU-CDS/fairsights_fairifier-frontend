import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateQueryComponent } from './validate-query.component';

describe('ValidateQueryComponent', () => {
  let component: ValidateQueryComponent;
  let fixture: ComponentFixture<ValidateQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidateQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
