import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { SimpleMedicamento } from '../../insumos/interfaces';
import { MedicinaService } from '../../insumos/services/medicina.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { tap } from 'rxjs';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-insumo-page',
  imports: [RouterLink],
  templateUrl: './insumo-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class InsumoPageComponent implements OnInit {

  private medicinaService = inject(MedicinaService);
  private route = inject(ActivatedRoute);
  public medicamento = signal<SimpleMedicamento | null>(null);
  private title = inject(Title);
  private meta = inject(Meta);

  constructor() {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      return;
    }

    this.medicinaService.loadMedicamento(+id)
      .pipe(
        tap(({ nombreGenerico, id }) => {
          const pageTitle = `# ${id} - ${nombreGenerico}`;
          const pageDescription = `Información sobre ${nombreGenerico}`;

          this.title.setTitle(pageTitle);
          this.meta.updateTag({
            name: 'description',
            content: pageDescription
          });
          this.meta.updateTag({
            name: 'og:title',
            content: pageTitle
          });
          this.meta.updateTag({
            name: 'og:description', 
            content: pageDescription
          });

        })
      )
      .subscribe(medicamento => {
        this.medicamento.set(medicamento);
      });
  }
}
