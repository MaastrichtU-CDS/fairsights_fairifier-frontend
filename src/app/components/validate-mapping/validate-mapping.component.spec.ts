import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditComponent } from './validate-mapping.component';

describe('ValidateMappingComponent', () => {
  let component: ValidateMappingComponent;
  let fixture: ComponentFixture<ValidateMappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidateMappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
