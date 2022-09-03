import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Component imports
import { CounterComponent } from './components/counter/counter.component';
import { UserComponent } from './components/user/user.component';

export const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },

  { path: 'counter', component: CounterComponent },
  { path: 'user', component: UserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
