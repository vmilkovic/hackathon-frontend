import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenuesMapComponent } from './venues-map.component';

describe('VenuesMapComponent', () => {
  let component: VenuesMapComponent;
  let fixture: ComponentFixture<VenuesMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VenuesMapComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VenuesMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
