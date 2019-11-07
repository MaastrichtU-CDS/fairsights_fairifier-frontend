import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

import { ValidateQueryComponent } from './validate-query.component';

describe('ValidateQueryComponent', () => {
  let component: ValidateQueryComponent;
  let fixture: ComponentFixture<ValidateQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [ HttpClientTestingModule, FormsModule ],
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
