import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GenericComponent } from './pages/generic/generic.component';
import { ElementsComponent } from './pages/elements/elements.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'generic', component: GenericComponent },
  { path: 'elements', component: ElementsComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
