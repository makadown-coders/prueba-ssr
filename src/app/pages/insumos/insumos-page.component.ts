import { ApplicationRef, ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { InsumoListComponent } from '../../insumos/components/insumo-list/insumo-list.component';
import { InsumoListSkeletonComponent } from './ui/insumo-list-skeleton/insumo-list-skeleton.component';
import { MedicinaService } from '../../insumos/services/medicina.service';
import { SimpleMedicamento } from '../../insumos/interfaces';

@Component({
  selector: 'app-insumos-page',
  imports: [InsumoListComponent, InsumoListSkeletonComponent],
  templateUrl: './insumos-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class InsumosPageComponent implements OnInit, OnDestroy {

  private medicamentosService = inject(MedicinaService);
  public medicamentos = signal<SimpleMedicamento[]>([]);

  //public isLoading = signal(true);
  /*private appRef = inject(ApplicationRef);
  private $appState = this.appRef.isStable.subscribe( isStable => {
    console.log({isStable});
  });*/

  ngOnInit(): void {
    this.cargarMedicamentos();
    /*setTimeout(() => {
      this.isLoading.set(false);
    }, 5000);*/
  }

  cargarMedicamentos(nextPage = 0) {
    this.medicamentosService.loadPage(nextPage).subscribe(medicamentos => {
      this.medicamentos.set(medicamentos);
    });
  }

  ngOnDestroy(): void {
    /*this.$appState.unsubscribe();*/
  }

}
