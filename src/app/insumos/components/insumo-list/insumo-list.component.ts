import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InsumoCardComponent } from '../insumo-card/insumo-card.component';

@Component({
  selector: 'app-insumo-list',
  imports: [CommonModule, InsumoCardComponent],
  templateUrl: './insumo-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InsumoListComponent { }
