import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ContractRequestApiService } from '@mayor/data-access/services/contract/contract-request-api.service';
import { VenueLeafletMapService } from '@supervisor/data-access/services/venue/venue-leaflet-map.service';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { map } from 'rxjs';

@Component({
  selector: 'app-mayor-contract-request-list.component',
  standalone: true,
  imports: [TableModule, ButtonModule],
  providers: [VenueLeafletMapService],
  templateUrl: './mayor-contract-request-list.component.html',
})
export class MayorContractRequestListComponent {
  contractRequestApiService = inject(ContractRequestApiService);

  contractRequests = toSignal(
    this.contractRequestApiService.getAll$().pipe(map(({ data }) => data))
  ) as any;
}
