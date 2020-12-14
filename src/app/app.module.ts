import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { SqliteDbCopy} from '@ionic-native/sqlite-db-copy/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    BarcodeScanner,
    SQLite,
    SQLitePorter,
    SqliteDbCopy
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(public dbcopy:SqliteDbCopy){
    this.dbcopy.copy('cervejaria.db',0)
    .then( res => {console.log("copied database: " + JSON.stringify(res))})
    .catch((err) => {
      console.log("error: " + JSON.stringify(err));
    });
  }
}