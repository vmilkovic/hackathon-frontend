import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicVenuesComponent } from './venues-list.component';

describe('PublicVenuesComponent', () => {
  let component: PublicVenuesComponent;
  let fixture: ComponentFixture<PublicVenuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicVenuesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PublicVenuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
