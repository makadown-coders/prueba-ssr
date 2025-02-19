import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { InsumoCardComponent } from '../insumo-card/insumo-card.component';
import { SimpleMedicamento } from '../../interfaces';

@Component({
  selector: 'app-insumo-list',
  imports: [CommonModule, InsumoCardComponent],
  templateUrl: './insumo-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InsumoListComponent { 
  public medicamentos = input.required<SimpleMedicamento[]>();

}
