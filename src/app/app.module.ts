import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppToolbar } from './template/toolbar.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    AppToolbar,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
