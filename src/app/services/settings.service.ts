import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // No hace falta importarlo en ningún modulo. Solo injectarlo donde se necesite.
})
export class SettingsService {

  private linkTheme = document.querySelector('#theme');

  constructor() {
    const savedTheme = localStorage.getItem('theme');
    this.linkTheme?.setAttribute('href', savedTheme!);
  }

  changeTheme(theme: string) {
    const url = `./assets/css/colors/${theme}.css`;

    this.linkTheme?.setAttribute('href', url);
    localStorage.setItem('theme', url);

    this.checkCurrentTheme();
  }

  checkCurrentTheme() {
   const links = document.querySelectorAll('.selector');

    links.forEach(elem => {
      elem.classList.remove('working');
      const btnTheme = elem.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.linkTheme?.getAttribute('href');

      if (btnThemeUrl === currentTheme) {
        elem.classList.add('working');
      }
    });
  }
}
