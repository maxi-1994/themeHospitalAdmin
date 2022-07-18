import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';

const routes: Routes = [
  // path: '/dashboard' PagesRoutingModule
  // path: '/auth' AuthRoutingModule

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: NopagefoundComponent}, // Cualquier ruta que no este definida, mostrará 404
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes), // Se especifican las rutas principales.
    PagesRoutingModule, // Se importa el modulo de ruteo de pages con sus rutas hijas.
    AuthRoutingModule,
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
