import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CoursesListComponent } from './pages/courses/courses-list/courses-list.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AuthGuardService } from './common/services/authorization/auth-guard.service.service';
import { CourseComponent } from './pages/courses/course/course.component';

const routes: Routes = [
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
  {
    path: 'courses',
    component: CoursesListComponent,
    canActivate: [AuthGuardService],
    data: {
      breadcrumb: ''
    }
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'courses/:id',
    component: CourseComponent,
    canActivate: [AuthGuardService],
    data: {
      breadcrumb: 'Course'
    }
  },
  {
    path: 'add-course',
    component: CourseComponent,
    canActivate: [AuthGuardService],
    data: {
      breadcrumb: 'New Course'
    }
  },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
