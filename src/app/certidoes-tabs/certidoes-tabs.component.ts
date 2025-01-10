import { MatToolbarModule } from '@angular/material/toolbar';
import { Component } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { MatTabsModule } from '@angular/material/tabs';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

export interface TabelaCertidoes {
  label: string;
  url: SafeResourceUrl;
}

@Component({
  selector: 'app-certidoes-tabs',
  imports: [
    CommonModule,
    MatTabsModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    AsyncPipe,
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
          {
            label: 'FGTS',
            url: this.sanitizer.bypassSecurityTrustResourceUrl(
              'https://consulta-crf.caixa.gov.br/consultacrf/pages/consultaEmpregador.jsf'
            ),
          },
          {
            label: 'Trabalhista',
            url: this.sanitizer.bypassSecurityTrustResourceUrl(
              'https://cndt-certidao.tst.jus.br/inicio.faces;jsessionid=wmtKd6-JXaDPJG_-f_JaLvlCD8-EmN9ivwKlp-qS.cndt-certidao-19-gp7xp'
            ),
          },
        ]);
      }, 1000);
    });
  }
}
console.log('Tabs emitidas!');
