import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/_core/guards/auth.guard';

const routes: Routes = [
  {
    path: "",
    component: AdminComponent,
  },
  {
    path: "dash-board",
    loadChildren: () => import('./dash-board/dash-board.module').then(x => x.DashBoardModule),
    canActivate: [AuthGuard]
  },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)]
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
