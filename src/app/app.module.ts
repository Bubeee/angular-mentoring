import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared-components/header/header.component';
import { FooterComponent } from './shared-components/footer/footer.component';
import { ToolboxComponent } from './shared-components/toolbox/toolbox.component';
import { SearchableItemComponent } from './shared-components/searchable-item/searchable-item.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthorizationService } from './shared-services/authorization/authorization.service';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'courses',
    component: CoursesComponent,
    data: { title: 'Courses List' }
  },
  { path: 'login', component: LoginComponent },
  { path: '',
    redirectTo: '/courses',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    HeaderComponent,
    FooterComponent,
    ToolboxComponent,
    SearchableItemComponent,
    CoursesComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthorizationService],
  bootstrap: [AppComponent]
})
export class AppModule {}
