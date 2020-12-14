import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  // },
  {
    path: '',
    loadChildren: () => import('./tablinks/tablinks.module').then( m => m.TablinksPageModule)
    // redirectTo: 'home',
    // pathMatch: 'full'
  }
  // ,
  // {
  //   path: 'scanner',
  //   loadChildren: () => import('./scanner/scanner.module').then( m => m.ScannerPageModule)
  // },
  // {
  //   path: 'infos',
  //   loadChildren: () => import('./infos/infos.module').then( m => m.InfosPageModule)
  // },
  // {
  //   path: 'more',
  //   loadChildren: () => import('./more/more.module').then( m => m.MorePageModule)
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
