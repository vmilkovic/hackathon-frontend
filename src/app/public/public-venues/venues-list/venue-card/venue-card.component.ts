import { Component, computed, input, Signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { GalleriaModule } from 'primeng/galleria';
import { IGalleriaImage } from 'src/app/shared/models/primeng/galleria-image/galleria-image.model';
import { IVenue } from 'src/app/shared/models/venue/venue.model';

@Component({
  selector: 'app-venue-card',
  standalone: true,
  imports: [RouterModule, ButtonModule, GalleriaModule, CardModule],
  templateUrl: './venue-card.component.html',
})
export class VenueCardComponent {
  public venue = input<IVenue>();
  public galleriaImages: Signal<IGalleriaImage[]> = computed(() => {
    return (
      this.venue()?.images.map((image) => ({
        itemImageSrc: image.url,
        thumbnailImageSrc: image.url,
      })) ?? []
    );
  });
}
