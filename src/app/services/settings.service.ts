import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  ajustes: Ajustes = {
    temaUrl: '/assets/css/colors/default.css',
    tema: 'default'
  };

  constructor() { 
    this.cargarAjustes();
  }

  /**
   * Guardar los ajustes en el almacenamiento local del navegador.
   */
  guardarLocalStorage() {
    // console.log('Guardando los ajustes en el almacenamiento local');
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
  }

  /**
   * Cargar los ajustes del almacenamiento local a la aplicación.
   */
  cargarAjustes() {

    if (localStorage.getItem('ajustes')) {

      // console.log('Cargando los ajustes del almacenamiento local');
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
      this.aplicarTema(this.ajustes.tema);
    } else {
      console.log('No se ha encontrado ajustes que cargar. Utilizando valores por defecto');
    }
  }

  /**
   * Aplica un tema a la aplicación
   * @param tema Tema que aplicar
   */
  aplicarTema(tema: string) {

    // Cambiamos el tema indicándole a qué hoja de estilos apuntar
    const temaPath = `/assets/css/colors/${tema}.css`;
    document.getElementById('theme').setAttribute('href', temaPath);

    // Hacemos el cambio persistente
    this.ajustes.tema = tema;
    this.ajustes.temaUrl = temaPath;
    this.guardarLocalStorage();
  }
}


interface Ajustes {
  temaUrl: string;
  tema: string;
}
