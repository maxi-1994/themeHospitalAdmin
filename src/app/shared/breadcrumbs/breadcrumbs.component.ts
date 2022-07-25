import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy {

  // Obteniendo parametros de rutas

  public breadCrumbsTitle!: string;
  public titleSubs!: Subscription;

  constructor(private router: Router) {

    this.titleSubs = this.getParametrosRuta().subscribe(({ title }) => {
      // Por destructuring se obtiene solo la propiedad del valor.
      this.breadCrumbsTitle = title;
      document.title = `AdminPro - ${ title }`;
    });

  }

  getParametrosRuta(): Observable<any> {
    // Se obtiene el parametro de la ruta desde el Router para indicarlo en el breadcrumb
    return this.router.events
      .pipe(
        filter<any>(event => event instanceof ActivationEnd),
        filter(event => event.snapshot.firstChild === null),
        map(event => event.snapshot.data)
      )
  }

  ngOnDestroy(): void {
    this.titleSubs.unsubscribe();
  }

  // ================= RECOMENDACIÓN =================

  // El constructor se ejecuta antes que el ngOnInit

  // Normalmente se usa el constructor para inicializar variables, y el ngOnInit para inicializar o ejecutar tareras que tienen que ver con Angular.
  // Todo esto lo podemos poner directamente en el constructor y funcionaría de la misma manera, pero no está de más tener más separado el código para que sea más mantenible.

  // Es decir, mi recomendación es que en el constructor solo incialices variables y el ngOnInit el resto de cosas: llamadas a backend, preparación de los datos, filtrado, etc.

}
