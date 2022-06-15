import { MainArrFormComponent } from './kk-Forms/main-arr-form/main-arr-form.component';
import { KkajStartComponent } from './kkaj-start/kkaj-start.component';
import { MainpageComponent } from './kk-AdvSearch/mainpage/mainpage/mainpage.component';
import { KkResultsComponent } from './kk-results/kk-results.component';
import { DetailpageComponent } from './kk-AdvSearch/detailpage/detailpage/detailpage.component';
import { Err404PageComponent } from './core/shared/err404-page/err404-page.component';

import { NgModule } from '@angular/core';
import { ExtraOptions, PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { KkResultDetailsComponent } from './kk-results/kk-result-details/kk-result-details.component';

const routerOptions: ExtraOptions = {
  enableTracing: false,
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64]
};
const routes: Routes = [

  { path: 'start',  component: KkajStartComponent, },
  // { path: 'arrform',  component: MainArrFormComponent, },
  {
    path: 'arrform',
    loadChildren: ()=> import('kk-aj-public-forms').then(m=> m.KkAjPublicFormsModule)
  },
  { path: 'ansok', component: MainArrFormComponent},
  { path: 'advsearch',component: MainpageComponent, },
  { path: 'favoriter', component: KkResultsComponent },
  { path: 'lista' ,
    children: [
      {path: ':id/Arrangemang/:arrid', component: KkResultDetailsComponent},
      {path: 'favoriter', component: KkResultsComponent},
      {path: ':id', component: KkResultsComponent},
      {path: '', component: KkajStartComponent},
    ]
  },
  { path: 'Arr/id/:id', component: DetailpageComponent },
  { path: '',  redirectTo: '/start', pathMatch: 'full' },
  { path: '**',  component: Err404PageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
