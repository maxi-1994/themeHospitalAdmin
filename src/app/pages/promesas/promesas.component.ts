import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [],
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Ejemplo Promesa
    // const promesa = new Promise((resolve, reject) => {
    //   if (false) {
    //     resolve('hola mundo');
    //   } else {
    //     reject('Algo salió mal');
    //   }
    // });

    // promesa.then((mensaje) => {
    //   console.log(mensaje);
    // })
    // .catch(error => {
    //   console.log('Error en mi promesa: ', error);
    // });
    // console.log('fin del init');

    this.getUsuarios().then(usuarios => {
      console.log(usuarios);
    });

    console.log('hola');
  }

  getUsuarios(): Promise<any> {

    return new Promise((resolve) => {
      fetch('https://reqres.in/api/users')
      .then(resp => resp.json())
      .then(body => resolve(body.data))

    });

  }

}
