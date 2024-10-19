import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyReservationDocumentsComponent } from './my-reservation-documents.component';

describe('MyReservationDocumentsComponent', () => {
  let component: MyReservationDocumentsComponent;
  let fixture: ComponentFixture<MyReservationDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyReservationDocumentsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MyReservationDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
