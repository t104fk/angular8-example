import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppToolbar } from './templates/toolbar.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactComponent } from './react/react.component';
import { GuideComponent } from './guide/guide.component';

@NgModule({
  declarations: [
    AppComponent,
    AppToolbar,
    ReactComponent,
    GuideComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
