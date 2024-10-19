import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  effect,
  input,
} from '@angular/core';
import { Icon, layerGroup, map, Map, marker, tileLayer } from 'leaflet';
import { IVenue } from 'src/app/shared/models/venue/venue.model';

@Component({
  selector: 'app-venues-map',
  standalone: true,
  templateUrl: './venues-map.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VenuesMapComponent implements AfterViewInit {
  public venues = input<IVenue[]>();

  private map!: Map;
  private markersLayer = layerGroup();

  constructor() {
    effect(() => {
      const venues = this.venues();
      if (this.map && venues) {
        this.updateMapMarkers(venues);
      }
    });
  }

  public ngAfterViewInit(): void {
    Icon.Default.imagePath = 'assets/leaflet/images/';
    this.initMap();
  }

  private initMap(): void {
    this.map = map('map', {
      center: [45.9028, 16.8481],
      zoom: 13,
    });

    // OpenStreetMap tile, there are other solutions but this one is free
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
    }).addTo(this.map);

    this.markersLayer.addTo(this.map);
  }

  private updateMapMarkers(venues: IVenue[]): void {
    // Clear existing markers before adding new
    this.markersLayer.clearLayers();

    // Add new markers
    venues.forEach((venue) => {
      const markerToAdd = marker([
        venue.location.latitude,
        venue.location.longitude,
      ]);
      markerToAdd.bindPopup(this.buildMarkerPopupTemplateForVenue(venue));
      this.markersLayer.addLayer(markerToAdd);
    });
  }

  private buildMarkerPopupTemplateForVenue(venue: IVenue): string {
    const thumbnailImage = venue.images[0];

    return `
      <a href="/venues/${venue.id}" target="_blank">
        <img src="${thumbnailImage.url}" alt="${venue.name}" />
        <strong class="text-black">${venue.name}</strong>
        <p class="!m-0 text-gray-700">${venue.description}</p>
      </a>
    `;
  }
}
