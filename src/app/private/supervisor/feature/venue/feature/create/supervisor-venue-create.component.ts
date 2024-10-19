import { NgTemplateOutlet } from '@angular/common';
import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { VenueLeafletMapService } from '@supervisor/data-access/services/venue/venue-leaflet-map.service';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { VenueCreateFormService } from '../../data-access/services/create/venue-create-form..service';

@Component({
  selector: 'app-supervisor-venue-create',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule,
    NgTemplateOutlet,
    InputTextModule,
    FloatLabelModule,
    InputNumberModule,
    InputSwitchModule,
    ButtonModule,
  ],
  providers: [VenueLeafletMapService],
  templateUrl: './supervisor-venue-create.component.html',
})
export class SupervisorVenueCreateComponent implements OnInit, AfterViewInit {
  private venueLeafletMapService = inject(VenueLeafletMapService);
  private venueCreateFormService = inject(VenueCreateFormService);

  createVenueForm = this.venueCreateFormService.getCreateVenueForm();

  ngOnInit(): void {
    this.venueCreateFormService.initCreateVenueFormService();
  }

  ngAfterViewInit(): void {
    this.venueLeafletMapService.initVenueLeafletMapService(
      this.createVenueForm
    );
  }

  onSubmit() {
    this.venueCreateFormService.submitForm();
  }
}
