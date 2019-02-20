import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirestoreformComponent } from './firestoreform.component';

describe('FirestoreformComponent', () => {
  let component: FirestoreformComponent;
  let fixture: ComponentFixture<FirestoreformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirestoreformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirestoreformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
