import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './shared-components/header/header.component';
import { FooterComponent } from './shared-components/footer/footer.component';
import { ToolboxComponent } from './shared-components/toolbox/toolbox.component';
import { SearchableItemComponent } from './shared-components/searchable-item/searchable-item.component';


@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    ToolboxComponent,
    SearchableItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
