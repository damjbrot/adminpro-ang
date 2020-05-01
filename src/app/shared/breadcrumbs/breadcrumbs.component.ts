import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';

import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';



@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  pageTitle: string = '';

  constructor(private router: Router,
              private title: Title,
              private meta: Meta) {

    // Saber en qué página estamos
    this.getDataRoute().subscribe(titulo => {
      this.pageTitle = titulo;
      this.title.setTitle(this.pageTitle);

      const metaTag: MetaDefinition = {
        name: 'description',
        content: this.pageTitle
      };

      this.meta.updateTag(metaTag);
    });
  }

  ngOnInit(): void {
  }

  getDataRoute(): Observable<string> {

    return this.router.events.pipe(
      filter(evento => evento instanceof ActivationEnd),
      filter((evento: ActivationEnd) => evento.snapshot.data.titulo),
      map((evento: ActivationEnd) => evento.snapshot.data.titulo)
    );
  }

}
