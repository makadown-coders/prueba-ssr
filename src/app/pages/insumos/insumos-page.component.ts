import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InsumoListComponent } from '../../insumos/components/insumo-list/insumo-list.component';

@Component({
  selector: 'app-insumos-page',
  imports: [InsumoListComponent],
  templateUrl: './insumos-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class InsumosPageComponent { }
