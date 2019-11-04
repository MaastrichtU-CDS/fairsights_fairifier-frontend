import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOntologyModalComponent } from './add-ontology-modal.component';

describe('AddOntologyModalComponent', () => {
  let component: AddOntologyModalComponent;
  let fixture: ComponentFixture<AddOntologyModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOntologyModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOntologyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
