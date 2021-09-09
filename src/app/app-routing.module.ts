import { IndexComponent } from './modules/pages/index/index.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: 'index', component: IndexComponent },
	{ path: '', redirectTo: '/index', pathMatch: 'full' },
	{ path: '**', redirectTo: '/index', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
