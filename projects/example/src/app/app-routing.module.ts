import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnableDisableControlsComponent } from './components/enable-disable-controls/enable-disable-controls.component';
import { ShowHideControlsComponent } from './components/show-hide-controls/show-hide-controls.component';
import { DependencyValuesComponent } from './components/dependency-values/dependency-values.component';

const routes: Routes = [
  {
    path: 'enable-disable-controls',
    component: EnableDisableControlsComponent,
  },
  {
    path: 'show-hide-controls',
    component: ShowHideControlsComponent,
  },
  {
    path: 'dependency-values',
    component: DependencyValuesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
