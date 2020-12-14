import { Component } from "@angular/core";
import { ToastController } from "@ionic/angular";
import { DataService } from "../core/dbService/data.service";
import { InfoProduto } from "../entities/info-produto";

@Component({
  selector: "app-infos",
  templateUrl: "./infos.page.html",
  styleUrls: ["./infos.page.scss"],
})
export class InfosPage {

  infoProduto : InfoProduto = null;
  scannedCode : string;
  
  constructor(private dataService: DataService,
              private toastCtrl: ToastController) {}
    

  async getInfo(qrCode: string) {
    try {
      this.infoProduto = await this.dataService
        .getInfoProdutoForConsumidor(qrCode);
      let toast = await this.toastCtrl.create({
        header: "Parabéns",
        message: "Você ganhou um desconto no Zé Delivery!",
        color: "success",
        duration: 3000,
        position: "bottom",
        cssClass: "cupom",
      });
          toast.present();
        
    } catch (error) {
      let toast = await this.toastCtrl.create({
        message: error,
        duration: 3000,
        position: "bottom",
      });
      toast.present();
    }
  }

  IonViewWillEnter(){
    this.getInfo(this.scannedCode);
  }
}
