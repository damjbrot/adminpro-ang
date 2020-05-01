import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {

    this.subscription = this.regresaObservable()
      // .pipe(retry())
      .subscribe(
        numero => console.log('Contador: ', numero), // Next
        error => console.error('Error: ', error), // Error
        () => console.log('El observador terminó') // Completed
      );
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  regresaObservable(): Observable<number> {

    return new Observable(observer => {

      let contador = 0;

      const intervalo = setInterval(() => {

        contador += 1;

        const salida = {
          valor: contador
        };

        observer.next(salida);

        // if (contador === 3) {
        //   clearInterval(intervalo);
        //   observer.complete();
        // }

        // if (contador === 2) {
        //   clearInterval(intervalo);
        //   observer.error('El contador es 2');
        // }
      }, 1000);
    }).pipe(
      map( resp => resp.valor )
      // ,
      // filter( (valor, index) => {
      //     if ( (valor % 2) === 0) {
      //       return true;
      //     } else {
      //       return false;
      //     }
      // })
    );
  }
}
