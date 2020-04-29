import { Component, AfterViewInit, ElementRef, Renderer2, ViewChildren, QueryList } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements AfterViewInit {

  @ViewChildren('themeSelector') selectors: QueryList<ElementRef>;

  constructor( private renderer: Renderer2,
               public _settings: SettingsService ) {}

  ngAfterViewInit(): void {

    this.inicializarCheck();
  }

  /**
   * Cambia el tema de la aplicación
   * @param tema Indica el tema al que cambiar
   */
  cambiarTema(tema: string) {

    // Cambiamos el tema indicándole a qué hoja de estilos apuntar
    this._settings.aplicarTema(tema);
    // Indicamos en el AccountSettings qué tema se está aplicando
    this.aplicarCheck(tema);
  }

  /**
   * Indica en el grid de selección cuál es el tema que se está aplicando
   * @param tema Tema al que aplicarle el check
   */
  aplicarCheck(tema: string) {

    this.selectors.forEach( selector => {

      // Añadimos la clase al tema elegido y se la quitamos al anterior
      if (selector.nativeElement.dataset.theme === tema) {
        this.renderer.addClass(selector.nativeElement, 'working');
      } else if (selector.nativeElement.classList.contains('working')) {
        this.renderer.removeClass(selector.nativeElement, 'working');
      }
    });
  }

  /**
   * Resalta con un check el tema aplicado
   */
  inicializarCheck() {

    const tema = this._settings.ajustes.tema;

    this.selectors.forEach( selector => {

      // Añadimos la clase al tema cargado por defecto
      if (selector.nativeElement.dataset.theme === tema) {
        this.renderer.addClass(selector.nativeElement, 'working');
      }
    });
  }
}
