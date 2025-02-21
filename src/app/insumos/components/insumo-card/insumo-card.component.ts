import { ChangeDetectionStrategy, Component, effect, input } from '@angular/core';
import { SimpleMedicamento } from '../../interfaces';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-insumo-card',
  imports: [RouterLink],
  templateUrl: './insumo-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InsumoCardComponent { 
  public medicamento = input.required<SimpleMedicamento>()

  /*logEffect = effect(() => {
    console.log('insumo card ',this.medicamento());
  });*/

  
}
