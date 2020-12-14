import { Injectable } from '@angular/core';
import { Curiosidade } from 'src/app/entities/curiosidade';
import { Garrafa } from 'src/app/entities/garrafa';
import { InfoProduto } from 'src/app/entities/info-produto';
import { Lote } from 'src/app/entities/lote';
import { Marca } from 'src/app/entities/marca';
import { DatabaseService } from '../service/database.service';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  databaseName = 'cervejaria.db';
  db : SQLiteObject;

  constructor(private sqlite: SQLite, private sqlitePorter: SQLitePorter) {
    this.sqlite.create({ name: this.databaseName, location: 'default' })
      .then(res => {
        this.db = res;
      });
  }
  
  async checkGarrafaByQrCode(qrCode: string) {
    const sql = `select count(qrCode) from Garrafa
                 where Garrafa.qrCode == ${qrCode}`;
    this.db.executeSql(sql, [])
      .then( res => {
      return res.rows.item(0);
    });
    return 0;
  }

  async getInfoProdutoForConsumidor(qrCode: string) {
    const sql = `select nome, dataValidade, localFabricacao, tipo, teorAlcoolico, tempIdeal, ibu, descricao, ingredientes, harmonizacao, alergenicos, infoDaCevada, infoDoLupulo, infoOutras
                 from Lote
                 join Marca on Marca.id = Lote.marcaId
                 join Curiosidade on Curiosidade.loteId = Lote.id
                 join Garrafa on Garrafa.loteId = Lote.id
                 where Garrafa.qrCode == ${qrCode}`;

    const result = this.db.executeSql(sql, []).then( res=> {
      const rows = res.rows;
      const infoProduto = new InfoProduto();
  
      if (rows && rows.length > 0) {
          const item = rows.item(0);
  
          infoProduto.nome = item.nome;
          infoProduto.dataValidade = item.dataValidade;
          infoProduto.localFabricacao = item.localFabricacao;
          infoProduto.tipo = item.tipo;
          infoProduto.teorAlcoolico = item.teorAlcoolico;
          infoProduto.tempIdeal = item.tempIdeal;
          infoProduto.ibu = item.ibu;
          infoProduto.descricao = item.descricao;
          infoProduto.ingredientes = item.ingredientes;
          infoProduto.harmonizacao = item.harmonizacao;
          infoProduto.alergenicos = item.alergenicos;
          infoProduto.infoDaCevada = item.infoDaCevada;
          infoProduto.infoDoLupulo = item.infoDoLupulo;
          infoProduto.infoOutras = item.infoOutras; 
      }
      console.log(infoProduto);
      return infoProduto;
    });
    console.log(result);
    return await result;
  }

}
