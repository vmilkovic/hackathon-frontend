import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  inject,
  input,
  OnInit,
  Signal,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { GalleriaModule } from 'primeng/galleria';
import { IGalleriaImage } from 'src/app/shared/models/primeng/galleria-image/galleria-image.model';
import { VenuesActions } from 'src/app/shared/store/venues/venues.actions';
import { venuesFeature } from 'src/app/shared/store/venues/venues.store';

@Component({
  selector: 'app-venue-details',
  standalone: true,
  imports: [CommonModule, GalleriaModule, ButtonModule, DividerModule],
  templateUrl: './venue-details.component.html',
})
export class VenueDetailsComponent implements OnInit {
  private store = inject(Store);
  public currentVenueId = input('', {
    alias: 'id', // Alias is used to map the input to the route parameter which is 'id'
  });
  public currentVenue$ = this.store.selectSignal(
    venuesFeature.selectCurrentVenue
  );
  public galleriaImages: Signal<IGalleriaImage[]> = computed(() => {
    return (
      this.currentVenue$()?.images.map((image) => ({
        itemImageSrc: image.url,
        thumbnailImageSrc: image.url,
      })) ?? []
    );
  });
  public activeIndex = 0;
  public responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 5,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];

  public ngOnInit(): void {
    this.store.dispatch(
      VenuesActions.loadCurrentVenueById({ id: this.currentVenueId() })
    );
  }
}
