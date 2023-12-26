import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullstackengListComponent } from './fullstackeng-list/fullstackeng-list.component';
import { CreateFullstackengComponent } from './create-fullstackeng/create-fullstackeng.component';
import { UpdateFullstackengComponent } from './update-fullstackeng/update-fullstackeng.component';
import { FullstackengDetailsComponent } from './fullstackeng-details/fullstackeng-details.component';

const routes: Routes = [
  {path:'fullstackengs', component: FullstackengListComponent },
  {path:'create-fullstackeng', component: CreateFullstackengComponent },
  {path: '', redirectTo: 'fullstackengs', pathMatch: 'full'},
  {path: 'update-fullstackeng/:id', component: UpdateFullstackengComponent},
  {path: 'fullstackeng-details/:id', component: FullstackengDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
