import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactComponent } from './react/react.component';
import { GuideComponent } from './guide/guide.component';


const routes: Routes = [
  { path: 'react', component: ReactComponent },
  { path: 'guide', component: GuideComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
