import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { AccountSettingComponent } from './account-setting/account-setting.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

// A cada ruta se le pueden asignar parametro de ruta.
// por medio de la propiedad "data" se especifica el parametro. En este caso title para los breadcrums.
// Se puede asignar más de un parametro a cada ruta.

const routes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    children: [
      { path: '', component: DashboardComponent, data: { title: 'Dashboard' } },
      { path: 'progress', component: ProgressComponent, data: { title: 'ProgressBar' } },
      { path: 'chart', component: Grafica1Component, data: { title: 'Chart' }  },
      { path: 'account-setting', component: AccountSettingComponent, data: { title: 'Account Settings' }  },
      { path: 'promesas', component: PromesasComponent, data: { title: 'Promesas' }  },
      { path: 'rxjs', component: RxjsComponent, data: { title: 'RxJs' }  },
    ]
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class PagesRoutingModule {}
