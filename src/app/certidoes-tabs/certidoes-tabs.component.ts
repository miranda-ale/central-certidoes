import { AsyncPipe, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Observable, Observer } from 'rxjs';
import { ClrTabsModule } from '@clr/angular';

export interface TabelaCertidoes {
  label: string;
  url: SafeResourceUrl;
}

@Component({
  selector: 'app-certidoes-tabs',
  imports: [
    CommonModule,
    AsyncPipe,
    ClrTabsModule,
  ],
  templateUrl: './certidoes-tabs.component.html',
  styleUrls: ['./certidoes-tabs.component.css'],
})
export class CertidoesTabsComponent {
  asyncTabs: Observable<TabelaCertidoes[]>;

  constructor(private sanitizer: DomSanitizer) {
    this.asyncTabs = new Observable((observer: Observer<TabelaCertidoes[]>) => {
      setTimeout(() => {
        observer.next([
          {
            label: 'Federal',
            url: this.sanitizer.bypassSecurityTrustResourceUrl(
              'https://solucoes.receita.fazenda.gov.br/Servicos/certidaointernet/PJ/Emitir'
            ),
          },
          {
            label: 'Estadual',
            url: this.sanitizer.bypassSecurityTrustResourceUrl(
              'https://www10.fazenda.sp.gov.br/CertidaoNegativaDeb/Pages/EmissaoCertidaoNegativa.aspx'
            ),
          },
          {
            label: 'Municipal',
            url: this.sanitizer.bypassSecurityTrustResourceUrl(
              'https://duc.prefeitura.sp.gov.br/certidoes/forms_anonimo/frmConsultaEmissaoCertificado.aspx'
            ),
          },
        ]);
      }, 1000);
    });
  }
}
console.log('Tabs emitidas!');
