import { Component, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { map, retry, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [],
})
export class RxjsComponent implements OnDestroy {

  // El valor del observable se almacena en una propiedad para luego generar el unsubscribe.
  public intervalSubs!: Subscription;

  constructor() {

    // this.retornaObservable().pipe(
    //   // Cuando llega a 2, salta error pero como 'i' no se vuelve a inicializar, sigue manteniendo el mismo valor.
    //   // El retry reinicia el observable pero manteniendo el valor de i. De esta manera, se completa el observable correctamtene.
    //   retry() // Se le puede asignar la cantidad de intentos -> retry(3)
    // )
    // .subscribe({
    //   next: (valor) => console.log(valor),
    //   error: (err) => console.error('Error: ', err),
    //   complete: () => console.info('Obs terminado')
    // });

    this.intervalSubs = this.retornarIntervalo().subscribe(console.log);

   }

   retornarIntervalo(): Observable<number> {
    return interval(100)
      .pipe(
        map(valor => valor + 1),
        filter( valor => (valor % 2 === 0) ? true : false),
      )
   }

   retornaObservable(): Observable<number> {
    let i = -1; // No se vuelve a incializar en el interval por lo tanto, mantiene el valor.

    return new Observable<number>(observer => {
      // let i = -1;
      const intervalo = setInterval(() => {
        i++;
        observer.next(i);

        if (i === 4) {
          clearInterval(intervalo);
          observer.complete();
        }

        // if (i === 2) {
        //   console.log('i es igual a 2.... error');
        //   observer.error('i llegó al valor de 2');
        // }
      }, 1000);
    });
   }

   ngOnDestroy(): void {
    // Esto terminara con el observable.
    // Esto se debe útilizar con observables que emiten muchos valores ya que seguirá emitiendo aunque no se este navegando en el compoennte.
    this.intervalSubs.unsubscribe();
  }

}
