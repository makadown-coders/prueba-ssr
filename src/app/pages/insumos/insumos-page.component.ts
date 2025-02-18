import { ApplicationRef, ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { InsumoListComponent } from '../../insumos/components/insumo-list/insumo-list.component';
import { InsumoListSkeletonComponent } from './ui/insumo-list-skeleton/insumo-list-skeleton.component';

@Component({
  selector: 'app-insumos-page',
  imports: [InsumoListComponent, InsumoListSkeletonComponent],
  templateUrl: './insumos-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class InsumosPageComponent implements OnInit, OnDestroy {

  //public isLoading = signal(true);
  /*private appRef = inject(ApplicationRef);
  private $appState = this.appRef.isStable.subscribe( isStable => {
    console.log({isStable});
  });*/

  ngOnInit(): void {
    /*setTimeout(() => {
      this.isLoading.set(false);
    }, 5000);*/
  }

  ngOnDestroy(): void {
    /*this.$appState.unsubscribe();*/
  }

}
