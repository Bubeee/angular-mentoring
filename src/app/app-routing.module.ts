import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CoursesListComponent } from './pages/courses/courses-list/courses-list.component';
import { LoginComponent } from './pages/login/login.component';
import { EditCourseComponent } from './pages/courses/edit-course/edit-course.component';
import { AddCourseComponent } from './pages/courses/add-course/add-course.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AuthGuardService } from './common/services/authorization/auth-guard.service.service';

const routes: Routes = [
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
  {
    path: 'courses',
    component: CoursesListComponent,
    canActivate: [AuthGuardService]
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'courses/:id',
    component: EditCourseComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'add-course',
    component: AddCourseComponent,
    canActivate: [AuthGuardService]
  },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
