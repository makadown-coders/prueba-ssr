import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-pricing-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PricingPageComponent implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);
  private platform = inject(PLATFORM_ID);

  ngOnInit(): void {
    // console.log({hola: 'prueba'});
    this.title.setTitle('Precios - Prueba SSR');
    // console.log({platform: this.platform});
    //if (isPlatformBrowser(this.platform)) {
      //document.title = 'Precios - SSR Test';
    //}
    this.meta.updateTag({ name: 'description', content: 'Este es el Pricing page' });
    this.meta.updateTag({ name: 'og:title', content: 'Pricing page' });
    this.meta.updateTag({ name: 'keywords', content: 'IMSS,Bienestar,SSR,Mario,Serrano,Curso,Angular,PRO,Prueba' });
  }
 }

