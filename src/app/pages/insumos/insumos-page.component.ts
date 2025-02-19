import { ApplicationRef, ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { InsumoListComponent } from '../../insumos/components/insumo-list/insumo-list.component';
import { InsumoListSkeletonComponent } from './ui/insumo-list-skeleton/insumo-list-skeleton.component';
import { MedicinaService } from '../../insumos/services/medicina.service';
import { SimpleMedicamento } from '../../insumos/interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, tap } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-insumos-page',
  imports: [InsumoListComponent, InsumoListSkeletonComponent],
  templateUrl: './insumos-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class InsumosPageComponent implements OnInit, OnDestroy {

  private medicamentosService = inject(MedicinaService);
  public medicamentos = signal<SimpleMedicamento[]>([]);

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private title = inject(Title);

  public currentPage = toSignal<number>(
      this.route.queryParamMap.pipe(
        map(params => Number(params.get('page')) || 1), // get page param or default to 1
        map(page => ( isNaN(+page) ? 1 : +page ) ), // convert to number
        map(page => Math.max(1, page))) // ensure page is at least 1
  );
  //public isLoading = signal(true);
  /*private appRef = inject(ApplicationRef);
  private $appState = this.appRef.isStable.subscribe( isStable => {
    console.log({isStable});
  });*/

  ngOnInit(): void {
    console.log(this.currentPage());
    this.cargarMedicamentos();
    /*setTimeout(() => {
      this.isLoading.set(false);
    }, 5000);*/
  }

  cargarMedicamentos(page = 0) {
    const pageToLoad = Math.max(1, this.currentPage()! + page);

    // console.log({ pageToLoad, page, currentPage: this.currentPage() });

    this.medicamentosService.loadPage(pageToLoad)
    .pipe(
      tap( () => this.router.navigate([], {queryParams: {page: pageToLoad}}) ), // navigates to nowhere just to update the query params
      tap( () => this.title.setTitle(`Insumos - Página ${pageToLoad}`) )
    )
    .subscribe(medicamentos => {
      this.medicamentos.set(medicamentos);
    });
  }

  ngOnDestroy(): void {
    /*this.$appState.unsubscribe();*/
  }
 

}
