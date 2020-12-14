import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { Marca } from 'src/app/entities/marca';
import { Lote } from 'src/app/entities/lote';
import { Garrafa } from 'src/app/entities/garrafa';
import { Curiosidade } from 'src/app/entities/curiosidade';
import { FakeDataMarca } from './fakedata/fakeDataMarca';
import { FakeDataLote } from './fakedata/fakeDataLote';
import { FakeDataGarrafa } from './fakedata/fakeDataGarrafa';
import { FakeDataCuriosidade } from './fakedata/fakeDataCuriosidades';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  db: SQLiteObject;
  databaseName: string = 'cervejaria.db';

  // constructor(private sqlite: SQLite, private sqlitePorter: SQLitePorter) {
  //   this.sqlite.create({ name: this.databaseName, location: 'default' }).then(res => {
  //     return this.db = res;
  //   });
  // }
  constructor(){}

    // openDatabase() {
    //   try {
    //     this.db = this.sqlite.create({ name: this.databaseName, location: 'default' });
    //     console.log(this.db);
    //     // await this.createDatabase(this.db);
    //   } catch (error) {
    //     console.error('Erro na criação do banco de dados', error);
    //   }
    // }

    // async createDatabase(db: SQLiteObject) {
    //   const sqlCreateDatabase = this.getCreateTable();
    //   this.sqlitePorter.wipeDb(db);
    //   console.log('vacuum');
    //   FakeDataMarca.forEach(async entity => await this.fillTableMarca(entity));
    //   FakeDataLote.forEach(async entity => await this.fillTableLote(entity));
    //   FakeDataGarrafa.forEach(async entity => await this.fillTableGarrafa(entity));
    //   FakeDataCuriosidade.forEach(async entity => await this.fillTableCuriosidade(entity));
    //   const result = await this.sqlitePorter.importSqlToDb(db, sqlCreateDatabase);
    //   return result ? true : false
    // };

    // getCreateTable(){
    //   const sqls = [];
    //   sqls.push(`CREATE TABLE IF NOT EXISTS Marca
    //       (id             INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    //       nome            TEXT NOT NULL,
    //       tipo            TEXT NOT NULL,
    //       descricao       TEXT NOT NULL,
    //       ingredientes    TEXT NOT NULL,
    //       harmonizacao    TEXT NOT NULL,
    //       alergenicos     TEXT NOT NULL,
    //       tempIdeal       TEXT NOT NULL,
    //       teorAlcoolico   NUMERIC NOT NULL,
    //       ibu             NUMERIC NOT NULL );`);

    //   sqls.push(`CREATE TABLE IF NOT EXISTS Lote
    //       (id              INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    //        etiqueta        TEXT NOT NULL,
    //        localFabricacao TEXT NOT NULL,
    //        dataValidade    TEXT NOT NULL,
    //        marcaId         BLOB NOT NULL,
    //        FOREIGN KEY(marcaId) REFERENCES marca(id));`);

    //   sqls.push(`CREATE TABLE IF NOT EXISTS Garrafa
    //      (id              INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    //       qrCode          BLOB NOT NULL,
    //       ciclos          INT NOT NULL,
    //       qualidade       INT NOT NULL,
    //       dataFabricacao  TEXT NOT NULL,
    //       linhaEnvase     TEXT NOT NULL,
    //       loteId          BLOB NOT NULL,
    //       FOREIGN KEY(loteId) REFERENCES lote(id));`);

    //   sqls.push(`CREATE TABLE IF NOT EXISTS Curiosidade
    //      (id              INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    //       infoDaCevada    TEXT NOT NULL,
    //       infoDoLupulo    TEXT NOT NULL,
    //       infoOutras      TEXT,
    //       loteId          BLOB NOT NULL,
    //       FOREIGN KEY(loteId) REFERENCES lote(id));`);
    //   console.log('chegou aqui')
    //   return sqls.join('\n');
    // };

    // async fillTableMarca(marca: Marca){
    //   return await this.db.executeSql(
    //     `INSERT INTO marca (
    //     nome, tipo, descricao, ingredientes, harmonizacao, alergenicos, tempIdeal, teorAlcoolico, ibu
    //     ) VALUES (
    //         "${marca.nome}",
    //         "${marca.tipo}",
    //         "${marca.descricao}",
    //         "${marca.ingredientes}",
    //         "${marca.harmonizacao}"
    //         "${marca.alergenicos}"
    //         "${marca.tempIdeal}"
    //         "${marca.teorAlcoolico}"
    //         "${marca.ibu}"
    //     )`, []
    //   );
    // }

    // async fillTableLote(lote:Lote){
    //   return await this.db.executeSql(
    //     `INSERT INTO lote (
    //         etiqueta, localFabricacao dataValidade, marcaId
    //     ) VALUES (
    //         "${lote.etiqueta}",
    //         "${lote.localFabricacao}",
    //         "${lote.dataValidade}",
    //         "${lote.marcaId}"
    //     )`, []
    //   );
    // }

    // async fillTableCuriosidade(curiosidade:Curiosidade){
    //   return await this.db.executeSql(
    //     `INSERT INTO curiosidades (
    //       infoDaCevada, infoDoLupulo, infoOutras, loteId
    //     ) VALUES (
    //       "${curiosidade.infoDaCevada}",
    //       "${curiosidade.infoDoLupulo}",
    //       "${curiosidade.infoOutras}",
    //       "${curiosidade.loteId}"
    //     )`, []
    //   );
    // }

    // async fillTableGarrafa(garrafa:Garrafa){
    //   return await this.db.executeSql(
    //     `INSERT INTO garrafa (
    //     qrCode, ciclos, qualidade, linhaEnvase, dataFabricacao, loteId
    //     ) VALUES (
    //       "${garrafa.qrCode}",
    //       "${garrafa.ciclos}",
    //       "${garrafa.qualidade}",
    //       "${garrafa.linhaEnvase}",
    //       "${garrafa.dataFabricacao}",
    //       "${garrafa.loteId}"
    //     )`, []
    //   );
    // }

    // executeSql(sql: string, params?: any[]) : Promise<SQLiteObject>{
    //   return this.db.then(res => {return res.executeSql(sql, params)});
    // };
  
}
