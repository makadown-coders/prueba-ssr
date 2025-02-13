import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ContactPageComponent  implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('Contacto - Prueba SSR');
    this.meta.updateTag({ name: 'description', content: 'Este es el Contact page' });
    this.meta.updateTag({ name: 'og:title', content: 'Contact page' });
    this.meta.updateTag({ name: 'keywords', content: 'IMSS,Bienestar,SSR,Mario,Serrano,Curso,Angular,PRO,Prueba' });
  }
 }

