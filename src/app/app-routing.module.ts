import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CoursesComponent } from './pages/courses/courses.component';
import { LoginComponent } from './pages/login/login.component';
import { EditCourseComponent } from './pages/edit-course/edit-course.component';

const routes: Routes = [
    { path: '', redirectTo: '/courses', pathMatch: 'full' },
    { path: 'courses', component: CoursesComponent },
    { path: 'login', component: LoginComponent },
    { path: 'edit-course/:id', component: EditCourseComponent },
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(routes)],
})

export class AppRoutingModule { }
