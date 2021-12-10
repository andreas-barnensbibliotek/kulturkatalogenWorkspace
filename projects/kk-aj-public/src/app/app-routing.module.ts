import { KkResultsComponent } from './kk-results/kk-results.component';
import { DetailpageComponent } from './kk-AdvSearch/detailpage/detailpage/detailpage.component';
import { KatalogenMainComponent } from './kk-AdvSearch/katalogen-main/katalogen-main.component';
import { MainArrFormComponent } from './kk-Forms/main-arr-form/main-arr-form.component';
import { Err404PageComponent } from './core/shared/err404-page/err404-page.component';
import { KkStartComponent } from './kk-start/kk-start.component';
import { NgModule } from '@angular/core';
import { ExtraOptions, PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routerOptions: ExtraOptions = {
  enableTracing: false,
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
  preloadingStrategy: PreloadAllModules,
};
const routes: Routes = [

  { path: 'start',  component: KkStartComponent, },
  { path: 'arrform',  component: MainArrFormComponent, },
  { path: 'advsearch',component: KatalogenMainComponent, },
  { path: 'lista/:id',component: KkResultsComponent, },
  { path: 'Arrangemang/id/:id', component: DetailpageComponent },
  { path: '',  redirectTo: '/start', pathMatch: 'full' },
  { path: '**',  component: Err404PageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
