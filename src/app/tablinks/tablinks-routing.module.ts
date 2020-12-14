import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TablinksPage } from "./tablinks.page";

const routes: Routes = [
  {
    path: '',
    component: TablinksPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m=>m.HomePageModule)
      },
      {
        path: 'infos',
        loadChildren: () => import('../infos/infos.module').then(m=>m.InfosPageModule)
      },
      {
        path: 'more',
        loadChildren: () => import('../more/more.module').then(m=>m.MorePageModule)
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablinksPageRoutingModule {}
