import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloworldComponent } from './helloworld/helloworld.component';

const routes: Routes = [
  {
    path: 'home', loadChildren: async () => (await import('./librarayname1/libraray1/libraray1.module')).Libraray1ListModule
    // path: 'accessservices', loadChildren: async () => (await import('./accessservices/accessservices.module')).Libraray1Module
  },
  {
    path:'hello',component: HelloworldComponent,
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
