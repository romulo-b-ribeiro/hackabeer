import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { DataService } from '../core/dbService/data.service';
import { InfoProduto } from '../entities/info-produto';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  scannedCode : string;
  nome: string;
  count: number;
  infoProduto : InfoProduto = null;

  constructor(private barcodeScanner: BarcodeScanner,
              private dataService: DataService,
              private router: Router) {}

  scanCode(){
    this.barcodeScanner.scan().then(barcodeData => {
        this.scannedCode = barcodeData.text;
        this.dataService.checkGarrafaByQrCode(this.scannedCode).then(res => {this.count = res});
        if (this.count > 0) {
          // this.nome = String(this.count);
        }
        console.log(this.count);
      }
    )
    this.infoProduto.nome = 'Budweiser';
    this.infoProduto.dataValidade = '2021-03-01T00:00:00.000Z';
    this.infoProduto.localFabricacao = 'Petrópolis/RJ';
    this.infoProduto.tipo = 'American Lager';
    this.infoProduto.teorAlcoolico = 5;
    this.infoProduto.tempIdeal = '0-4';
    this.infoProduto.ibu = 10;
    this.infoProduto.descricao = 'Só uma cerveja como a Budweiser consegue manter os 143 anos de história e, ao mesmo tempo, ter a autenticidade e liberdade para ser o que quiser. Ela não muda sua fórmula e nunca perde sua essência. Só Bud faz Bud.';
    this.infoProduto.ingredientes = 'Água, malte, arroz e lúpulo.';
    this.infoProduto.harmonizacao = 'O sabor marcante no começo e suave no final de Budweiser pede que ela harmonize com hambúrguer clássico, presunto cozido e mix de castanhas.';
    this.infoProduto.alergenicos = 'Contém cevada e glúten.';
    this.infoProduto.infoDaCevada = 'A cevada desta cerveja que você está tomando veio da fazenda da família Rocha, do Rio Grande do Sul.';
    this.infoProduto.infoDoLupulo = 'O lúpulo desta cerveja é proveniente da República Tcheca.';
    this.infoProduto.infoOutras = ''; 
    this.nome = JSON.stringify(this.infoProduto);
  }

}
