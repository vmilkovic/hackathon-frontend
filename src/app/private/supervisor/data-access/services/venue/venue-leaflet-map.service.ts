import { HttpClient } from '@angular/common/http';
import { DestroyRef, inject, Injectable } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormGroup } from '@angular/forms';
import {
  Icon,
  layerGroup,
  map as leafletMap,
  LeafletMouseEvent,
  Map,
  Marker,
  marker,
  tileLayer,
} from 'leaflet';
import { debounceTime, filter, fromEvent, switchMap } from 'rxjs';

@Injectable()
export class VenueLeafletMapService {
  private http = inject(HttpClient);
  private destroyRef = inject(DestroyRef);

  private leafletMap!: Map;
  private leafletMarker!: Marker;
  private leafletMarkersLayer = layerGroup();

  private venueForm!: FormGroup;

  initVenueLeafletMapService(
    venueForm: FormGroup,
    leafletMapElementId = 'map'
  ): void {
    this.venueForm = venueForm;

    this.initLeafletMap(leafletMapElementId);

    this.initUpdateFormFullAddressOnLeafletMarkerPositionChangeSubscription();
    this.initUpdateLeafletMarkerContentOnFormChangeSubscription();
  }

  private initLeafletMap(leafletMapElementId: string) {
    Icon.Default.imagePath = 'assets/leaflet/images/';

    this.leafletMap = leafletMap(leafletMapElementId, {
      center: [45.9028, 16.8481], // TODO: This can be the lat and lng from tenant if we add location to tenant
      zoom: 13,
    }).on('click', this.addLeafletMarker.bind(this));

    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
    }).addTo(this.leafletMap);

    this.leafletMarkersLayer.addTo(this.leafletMap);
  }

  private initUpdateFormFullAddressOnLeafletMarkerPositionChangeSubscription() {
    fromEvent<LeafletMouseEvent>(this.leafletMap, 'click')
      .pipe(
        debounceTime(1000),
        switchMap(({ latlng: { lat, lng } }) =>
          this.getLeafletMarkerAddress$(lat, lng)
        ),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(this.setLeafletMarkerAddressToFormFullAddress.bind(this));
  }

  private initUpdateLeafletMarkerContentOnFormChangeSubscription() {
    this.venueForm.valueChanges
      .pipe(
        filter(() => !!this.leafletMarker),
        debounceTime(500),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(this.updateLeafletMarkerContent.bind(this));
  }

  private addLeafletMarker(event: LeafletMouseEvent) {
    const name = this.venueForm.get('name');
    const description = this.venueForm.get('description');
    const latitude = this.venueForm?.get('location.latitude');
    const longitude = this.venueForm?.get('location.longitude');

    latitude?.setValue(event.latlng.lat);
    longitude?.setValue(event.latlng.lng);

    this.setLeafletMarker(
      name?.value,
      description?.value,
      latitude?.value,
      longitude?.value
    );
  }

  private setLeafletMarker(
    name: string,
    description: string,
    latitude: number,
    longitude: number
  ) {
    this.leafletMarker = marker([latitude, longitude]).bindPopup(
      this.getLeafletMarkerContentLayout(name, description)
    );

    this.leafletMarkersLayer.clearLayers().addLayer(this.leafletMarker);
  }

  private updateLeafletMarkerContent({
    name,
    description,
  }: {
    name: string;
    description: string;
  }) {
    this.leafletMarker
      .getPopup()
      ?.setContent(this.getLeafletMarkerContentLayout(name, description))
      .update();
  }

  private getLeafletMarkerContentLayout(name: string, description: string) {
    return `<strong>${name}</strong><br>${description}`;
  }

  private getLeafletMarkerAddress$(latitude: number, longitude: number) {
    return this.http.get<{ display_name: string }>(
      `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
    );
  }

  private setLeafletMarkerAddressToFormFullAddress({
    display_name,
  }: {
    display_name: string;
  }) {
    this.venueForm.get('location.fullAddress')?.setValue(display_name);
  }
}
