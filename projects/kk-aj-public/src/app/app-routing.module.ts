import { MainArrFormComponent } from './kk-Forms/main-arr-form/main-arr-form.component';
import { Err404PageComponent } from './core/shared/err404-page/err404-page.component';
import { KkStartComponent } from './kk-start/kk-start.component';
import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';


import { FormsModule } from '@angular/forms';
const routerOptions: ExtraOptions = {
  enableTracing: true,
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',

};
const routes: Routes = [

  { path: 'start',  component: KkStartComponent, },
  { path: 'arrform',  component: MainArrFormComponent, },
  { path: '',  redirectTo: '/start', pathMatch: 'full' },
  { path: '**',  component: Err404PageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
