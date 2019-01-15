import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserInComponent } from '../components/user-in/user-in.component';
import { UserOutComponent } from '../components/user-out/user-out.component';
import { MainComponent } from '../components/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'add',
    component: UserInComponent
  },
  {
    path: 'search',
    component: UserOutComponent
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }