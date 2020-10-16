import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () => import ('../home/home.module').then(m => m.HomePageModule)
          },
          { path: 'detail/:id', loadChildren: () => import('../details/details.module').then(m => m.DetailsPageModule) }
        ],
      },
      {
        path: 'expenses',
        children: [
          {
            path: '',
            //loadChildren: () => import('../expense-list/expense-list.module').then(m => m.ExpenseListPageModule)
          }
        ],
      },
      {
        path: 'settings',
        children: [
          {
            path: '',
            //loadChildren: () => import('../settings/settings.module').then(m => m.SettingsPageModule)
          }
        ],
      },
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
