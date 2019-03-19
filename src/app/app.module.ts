import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { TechnologyComponent } from './technology/technology.component';
import { HttpClientModule } from '@angular/common/http';
import { MatRadioModule } from '@angular/material/radio';
import { QuestionComponent } from './questions/question.component';
import { ResultComponent } from "./result/result.component";
import { Globals } from './globals';
import { UiMaterialComponents } from './ui-material-components';
import { FlexLayoutModule } from '@angular/flex-layout';

const dependencies = [
  BrowserModule,
  BrowserAnimationsModule,
  FormsModule,
  AuthModule,
  AppRoutingModule,
  HttpClientModule,
  MatRadioModule,
  UiMaterialComponents
]

const components = [
  AppComponent,
  TechnologyComponent,
  PageNotFoundComponent,
  QuestionComponent,
  ResultComponent
]

const modules = [
  dependencies,
  FlexLayoutModule
]

@NgModule({
  declarations: components,
  entryComponents: components,
  imports: modules,
  exports: [modules, components],
  providers: [Globals],
  bootstrap: [AppComponent]
})

export class AppModule {
  
}
