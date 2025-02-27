import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'insumos',
        loadComponent: () => import('./pages/insumos/insumos-page.component')
    },
    {
        path: 'insumos/:id',
        loadComponent: () => import('./pages/insumo/insumo-page.component')
    },
    {
        path: 'about',
        loadComponent: () => import('./pages/about/about-page.component')
    },
    {
        path: 'contact',
        loadComponent: () => import('./pages/contact/contact-page.component')
    },
    {
        path: 'pricing',
        loadComponent: () => import('./pages/pricing/pricing-page.component')
    },
    {
        path: '**',
        redirectTo: () => {
            // Aqui se pueden hacer validaciones antes de mandar a la pagina
            // deseada.
            // const authService = inject(AuthService);

            return 'about';
        }
    }
];
